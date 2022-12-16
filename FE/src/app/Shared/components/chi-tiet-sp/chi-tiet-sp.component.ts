import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor } from 'primeng/editor';
import { FileUpload } from 'primeng/fileupload';
import { ChiTietDto } from '../../models/ChiTietSPs/ChiTietDto.model';
import { CreateUpdateChiTietDto } from '../../models/ChiTietSPs/CreateUpdateChiTietDto.model';
import { SanPhamDto } from '../../models/SanPhams/SanPhamDto.model';
import { BlobService } from '../../services/blob.service';

@Component({
  selector: 'app-chi-tiet-sp',
  templateUrl: './chi-tiet-sp.component.html',
  styleUrls: ['./chi-tiet-sp.component.css'],
})
export class ChiTietSPComponent implements OnInit {
  @ViewChild(FileUpload) fileUpload!: FileUpload;
  @ViewChild(Editor) editor!: Editor;
  @Input('value')
  public set value(value: ChiTietDto) {
    this._value = value;
    if (value) {
      this.form.patchValue(value);
      console.log(this.form.value);
    }
  }
  private _value!: ChiTietDto;
  public get value(): ChiTietDto {
    return this._value;
  }
  @Output('validSubmit') onSubmit = new EventEmitter<CreateUpdateChiTietDto>();

  @Input('dssp') dssp: SanPhamDto[] = [];

  // Component state variables
  public form: FormGroup;
  constructor(private blobService: BlobService) {
    this.form = new FormGroup({
      gia: new FormControl(0, [
        Validators.required
      ]),
      idSanPham: new FormControl(0, [Validators.required]),
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
      dvt : new FormControl('', [Validators.required]),
      kichThuoc: new FormControl(0, [
        Validators.pattern(/\d+/),
        Validators.min(0),
      ]),
    });
  }

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      const payload: CreateUpdateChiTietDto = { ...this.form.value };
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
    }
  }
}
