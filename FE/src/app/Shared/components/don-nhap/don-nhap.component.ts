import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Editor } from 'primeng/editor';
import { FileUpload } from 'primeng/fileupload';
import { CreateDonNhapDto } from '../../models/DonNhaps/CreateDonNhapDto.model';
import { DonNhapDto } from '../../models/DonNhaps/DonNhapDto.model';
import { SanPhamDto } from '../../models/SanPhams/SanPhamDto.model';
import { BlobService } from '../../services/blob.service';

@Component({
  selector: 'app-don-nhap',
  templateUrl: './don-nhap.component.html',
  styleUrls: ['./don-nhap.component.css'],
})
export class DonNhapComponent implements OnInit {
  @ViewChild(FileUpload) fileUpload!: FileUpload;
  @ViewChild(Editor) editor!: Editor;
  @Input('sanphams') sanphams: SanPhamDto[] = [];
  @Input('value')
  public set value(value: DonNhapDto | undefined) {
    this._value = value;
    if (value) {
      this.form.patchValue(value);
    } else {
      this.form.reset();
    }
  }
  private _value: DonNhapDto | undefined;
  public get value(): DonNhapDto | undefined {
    return this._value;
  }
  @Output('validSubmit') onSubmit = new EventEmitter<CreateDonNhapDto>();

  // Component state variables
  public form: FormGroup;
  constructor(private blobService: BlobService) {
    this.form = new FormGroup({
      gia: new FormControl(0, [Validators.required]),
      code: new FormControl(''),
      moTa: new FormControl(''),
      tskt: new FormControl(''),
      donVi: new FormControl('', [Validators.required]),
      anhCT: new FormControl(''),
      mauSac: new FormControl('', [Validators.required]),
      soLuong: new FormControl('', [
        Validators.required,
        Validators.pattern(/\d+/),
        Validators.min(0),
      ]),
      dvt: new FormControl('', [Validators.required]),
      kichThuoc: new FormControl(0, [
        Validators.pattern(/\d+/),
        Validators.min(0),
      ]),
      idSanPham: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      const payload: CreateDonNhapDto = { ...this.form.value };
      if (this.fileUpload.files.length) {
        this.blobService.upload(this.fileUpload.files).subscribe({
          next: (res) => {
            if (res.success && res.data?.length) {
              payload.anhCT = res.data[0];
            }
          },
          complete: () => {
            this.onSubmit.emit(payload);
            this.fileUpload.clear();
          },
        });
      } else this.onSubmit.emit(payload);
    } else {
      console.log(this.form);
      for (let key in this.form.controls) {
        this.form.controls[key].markAsDirty();
      }
    }
  }
}
