import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { SettingType } from '../../models/Enums/SettingType.enum';
import { CreateUpdateSettingDto } from '../../models/Settings/CreateUpdateSettingDto.model';
import { SettingDto } from '../../models/Settings/SettingDto.model';
import { BlobService } from '../../services/blob.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  @ViewChild(FileUpload) fileUpload!: FileUpload;
  @Input('value')
  public set value(value: SettingDto) {
    this._value = value;
    if (value) {
      this.form.patchValue(value);
    } else {
      this.form.reset();
    }
  }
  private _value!: SettingDto;
  public get value(): SettingDto {
    return this._value;
  }
  @Output('validSubmit') onSubmit = new EventEmitter<CreateUpdateSettingDto>();

  // Component state variables
  public form: FormGroup;
  public SettingType = SettingType;
  constructor(private blobService: BlobService) {
    this.form = new FormGroup({
      type: new FormControl(0, [Validators.required]),
      title: new FormControl(),
      content: new FormControl(),
    });
    this.types = SettingType.getList();
  }

  ngOnInit(): void {}
  public types: any[];
  public submit() {
    if (this.form.valid) {
      const payload: CreateUpdateSettingDto = { ...this.form.value };
      payload.dsAnh = this.value.dsAnh;
      if (this.fileUpload.files.length) {
        this.blobService.upload(this.fileUpload.files).subscribe({
          next: (res) => {
            if (res.success && res.data?.length) {
              payload.dsAnh = res.data;
            }
          },
          complete: () => {
            this.onSubmit.emit(payload);
            this.fileUpload.clear();
          },
        });
      } else this.onSubmit.emit(payload);
    }
  }
}
