import { Injectable } from '@angular/core';
import { CreateUpdateHoaDonBanDto } from '../models/HoaDonBans/CreateUpdateHoaDonBanDto.model';
import { HoaDonBanDto } from '../models/HoaDonBans/HoaDonBanDto.model';
import { HoaDonBanLookUpDto } from '../models/HoaDonBans/HoaDonBanLookUpDto.model';
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
}
