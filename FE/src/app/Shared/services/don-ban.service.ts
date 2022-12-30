import { Injectable } from '@angular/core';
import { OrderStatus } from '../models/Enums/OrderStatus.enum';
import { CreateUpdateHoaDonBanDto } from '../models/HoaDonBans/CreateUpdateHoaDonBanDto.model';
import { DoanhSoDto } from '../models/HoaDonBans/DoanhSoDto.model';
import { DoanhSoRequestDto } from '../models/HoaDonBans/DoanhSoRequestDto.model';
import { HoaDonBanDto } from '../models/HoaDonBans/HoaDonBanDto.model';
import { HoaDonBanLookUpDto } from '../models/HoaDonBans/HoaDonBanLookUpDto.model';
import { PageResultDto } from '../models/PageResultDto.model';
import { ServiceResponse } from '../models/ServiceResponse.model';
import { HttpService } from './http.service';
import { PagedCRUDService } from './page-crud.service';

@Injectable({
  providedIn: 'root',
})
export class DonBanService extends PagedCRUDService<
  number,
  HoaDonBanDto,
  CreateUpdateHoaDonBanDto,
  HoaDonBanLookUpDto
> {
  constructor(http: HttpService) {
    super(http, 'HoaDonBans');
  }

  override search(payload: HoaDonBanLookUpDto) {
    const url = `${this.prefix}${this.controller}/search`;
    return this.http.post<ServiceResponse<PageResultDto<HoaDonBanDto>>>(
      url,
      payload
    );
  }

  doanhSo(request: DoanhSoRequestDto) {
    const url = `${this.prefix}${this.controller}/doanh-so`;
    return this.http.post<ServiceResponse<DoanhSoDto[]>>(url, request);
  }
  capNhatTrangThai(id: number, status: OrderStatus) {
    const url = `${this.prefix}${this.controller}/status/${id}`;
    return this.http.put<ServiceResponse<never>>(url, status);
  }
  yeuCauHuy(id: number) {
    const url = `${this.prefix}${this.controller}/cancel/${id}`;
    return this.http.post<ServiceResponse<never>>(url);
  }
}
