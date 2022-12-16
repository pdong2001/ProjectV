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
import { LoaiSPDto } from '../../models/LoaiSPs/LoaiSPDto.model';
import { CreateUpdateSanPhamDto } from '../../models/SanPhams/CreateUpdateSanPhamDto.model';
import { SanPhamDto } from '../../models/SanPhams/SanPhamDto.model';
import { ThuongHieuDto } from '../../models/ThuongHieus/ThuongHieuDto.model';
import { BlobService } from '../../services/blob.service';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css'],
})
export class SanphamComponent implements OnInit {
  @ViewChild(FileUpload) fileUpload!: FileUpload;
  @ViewChild(Editor) editor!: Editor;
  @Input('value')
  public set value(value: SanPhamDto) {
    this._value = value;
    if (value) {
      this.form.patchValue(value);
      console.log(this.form.value);
    }
  }
  private _value!: SanPhamDto;
  public get value(): SanPhamDto {
    return this._value;
  }
  @Output('validSubmit') onSubmit = new EventEmitter<CreateUpdateSanPhamDto>();

  @Input('dsloai') dsloai: LoaiSPDto[] = [];
  @Input('dsthuonghieu') dsthuonghieu: ThuongHieuDto[] = [];

  // Component state variables
  public form: FormGroup;
  constructor(private blobService: BlobService) {
    this.form = new FormGroup({
      tenSP: new FormControl('', [Validators.required]),
      anhSP: new FormControl(''),
      uuDai: new FormControl(0, [Validators.required]),
      idLoaiSP: new FormControl(''),
      idThuongHieu: new FormControl(''),
      mota: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      const payload: CreateUpdateSanPhamDto = { ...this.form.value };
      if (this.fileUpload.files.length) {
        this.blobService.upload(this.fileUpload.files).subscribe({
          next: (res) => {
            if (res.success && res.data?.length) {
              payload.anhSP = res.data[0];
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
