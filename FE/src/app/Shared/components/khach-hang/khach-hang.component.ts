import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Province, District, Ward } from '../../models/Address.model';
import { CreateUpdateKhachHangDto } from '../../models/KhachHangs/CreateUpdateKhachHangDto.model';
import { KhachHangDto } from '../../models/KhachHangs/KhachHangDto.model';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-khach-hang',
  templateUrl: './khach-hang.component.html',
  styleUrls: ['./khach-hang.component.css'],
})
export class KhachHangComponent implements OnInit {
  @Input('value')
  public set value(value: KhachHangDto | undefined) {
    this._value = value;
    if (value) {
      if (value.tinh) {
        this.findAddress(value.tinh, 1);
        if (value.huyen) {
          this.findAddress(value.huyen, 2);
        }
      }
      this.form.patchValue(value);
    } else {
      this.form.reset();
    }
  }
  @Output('onSubmit') onSubmit = new EventEmitter<CreateUpdateKhachHangDto>();
  private _value: KhachHangDto | undefined;
  public get value(): KhachHangDto | undefined {
    return this._value;
  }
  public selectedProvince: Province | undefined;
  public selectedDistrict: District | undefined;
  public selectedWard: Ward | undefined;
  public provinces: Province[] = [];
  public form: FormGroup;
  constructor(
    private addressService: AddressService,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      hoTen: ['', [Validators.required]],
      sdt: ['', [Validators.required]],
      email: ['', [Validators.email]],
      ngaySinh: [''],
      diaChi: ['', [Validators.required]],
      xa: ['', [Validators.required]],
      tinh: ['', [Validators.required]],
      huyen: ['', [Validators.required]],
      passWord: [''],
    });
  }

  ngOnInit(): void {
    this.addressService.getAddress().subscribe({
      next: (res) => {
        this.provinces = res;
        if (this.value?.tinh) {
          this.findAddress(this.value.tinh, 1);
          if (this.value?.huyen) {
            this.findAddress(this.value.huyen, 2);
          }
        }
      },
    });
  }
  public findAddress(name: string, type: 1 | 2) {
    if (type === 1) {
      this.selectedProvince = this.provinces.find((p) => p.name === name);
    } else if (type === 2 && this.selectedProvince) {
      this.selectedDistrict = this.selectedProvince.districts.find(
        (p) => p.name === name
      );
    }
  }

  public submitForm() {
    console.log(this.form);
    if (this.form.valid) {
      const payload = { ...this.form.value };
      this.onSubmit.emit(payload);
    } else {
      for (let key in this.form.controls) {
        this.form.controls[key].markAsDirty();
      }
    }
  }
}
