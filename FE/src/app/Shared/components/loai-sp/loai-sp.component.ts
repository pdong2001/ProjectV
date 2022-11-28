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
import { CreateUpdateLoaiSPDto } from '../../models/LoaiSPs/CreateUpdateLoaiSPDto.model';
import { LoaiSPDto } from '../../models/LoaiSPs/LoaiSPDto.model';
import { BlobService } from '../../services/blob.service';

@Component({
  selector: 'app-loai-sp',
  templateUrl: './loai-sp.component.html',
  styleUrls: ['./loai-sp.component.css'],
})
export class LoaiSPComponent implements OnInit {
  @ViewChild(FileUpload) fileUpload!: FileUpload;
  @Input('value')
  public set value(value: LoaiSPDto) {
    this._value = value;
    if (value) {
      this.form.patchValue(value);
    }
  }
  private _value!: LoaiSPDto;
  public get value(): LoaiSPDto {
    return this._value;
  }
  @Output('validSubmit') onSubmit = new EventEmitter<CreateUpdateLoaiSPDto>();

  // Component state variables
  public form: FormGroup;
  constructor(private blobService: BlobService) {
    this.form = new FormGroup({
      anh: new FormControl('', [Validators.required]),
      tenLSP: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      const payload: CreateUpdateLoaiSPDto = { ...this.form.value };
      if (this.fileUpload.files.length) {
        this.blobService.upload(this.fileUpload.files).subscribe({
          next: (res) => {
            if (res.success && res.data?.length) {
              payload.anh = res.data[0];
            }
          },
          complete: () => {
            this.onSubmit.emit(payload);
          },
        });
      } else this.onSubmit.emit(payload);
    }
  }
}
