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
import { CreateUpdateThuongHieuDto } from '../../models/ThuongHieus/CreateUpdateThuongHieuDto.model';
import { ThuongHieuDto } from '../../models/ThuongHieus/ThuongHieuDto.model';
import { BlobService } from '../../services/blob.service';

@Component({
  selector: 'app-thuong-hieu',
  templateUrl: './thuong-hieu.component.html',
  styleUrls: ['./thuong-hieu.component.css'],
})
export class ThuongHieuComponent implements OnInit {
  @ViewChild(FileUpload) fileUpload!: FileUpload;
  @Input('value')
  public set value(value: ThuongHieuDto) {
    this._value = value;
    if (value) {
      this.form.patchValue(value);
    }
  }
  private _value!: ThuongHieuDto;
  public get value(): ThuongHieuDto {
    return this._value;
  }
  @Output('validSubmit') onSubmit =
    new EventEmitter<CreateUpdateThuongHieuDto>();

  // Component state variables
  public form: FormGroup;
  constructor(private blobService: BlobService) {
    this.form = new FormGroup({
      logo: new FormControl(''),
      tenTH: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      const payload: CreateUpdateThuongHieuDto = { ...this.form.value };
      if (this.fileUpload.files.length) {
        this.blobService.upload(this.fileUpload.files).subscribe({
          next: (res) => {
            if (res.success && res.data?.length) {
              payload.logo = res.data[0];
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
