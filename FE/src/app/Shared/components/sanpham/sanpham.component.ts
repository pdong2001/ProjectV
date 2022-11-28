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
import { CreateUpdateSanPhamDto } from '../../models/SanPhams/CreateUpdateSanPhamDto.model';
import { SanPhamDto } from '../../models/SanPhams/SanPhamDto.model';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css'],
})
export class SanphamComponent implements OnInit {
  @ViewChild(FileUpload) fileUpload!: FileUpload;
  @Input('value')
  public set value(value: SanPhamDto) {
    this._value = value;
    if (value) {
      this.form.patchValue(value);
    }
  }
  private _value!: SanPhamDto;
  public get value(): SanPhamDto {
    return this._value;
  }
  @Output('validSubmit') onSubmit = new EventEmitter<CreateUpdateSanPhamDto>();

  // Component state variables
  public form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      tenSP: new FormControl('', [Validators.required]),
      uuDai: new FormControl(0, [Validators.pattern('d*')]),
      idLoaiSP: new FormControl(),
      idThuongHieu: new FormControl(),
    });
  }

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      const payload: CreateUpdateSanPhamDto = { ...this.form.value };
      this.onSubmit.emit(payload);
    }
  }
}
