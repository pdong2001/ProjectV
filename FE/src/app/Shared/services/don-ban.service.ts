import { Injectable } from '@angular/core';
import { CreateUpdateHoaDonBanDto } from '../models/HoaDonBans/CreateUpdateHoaDonBanDto.model';
import { DoanhSoDto } from '../models/HoaDonBans/DoanhSoDto.model';
import { DoanhSoRequestDto } from '../models/HoaDonBans/DoanhSoRequestDto.model';
import { HoaDonBanDto } from '../models/HoaDonBans/HoaDonBanDto.model';
import { HoaDonBanLookUpDto } from '../models/HoaDonBans/HoaDonBanLookUpDto.model';
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
  doanhSo(request: DoanhSoRequestDto) {
    const url = `${this.prefix}${this.controller}/doanh-so`;
    return this.http.post<ServiceResponse<DoanhSoDto[]>>(url, request);
  }
}
