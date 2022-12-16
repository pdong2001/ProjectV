import { Injectable } from '@angular/core';
import { PageLookUpDto } from '../models/PageLookUpDto.model';
import { CreateUpdateThuongHieuDto } from '../models/ThuongHieus/CreateUpdateThuongHieuDto.model';
import { ThuongHieuDto } from '../models/ThuongHieus/ThuongHieuDto.model';
import { HttpService } from './http.service';
import { PagedCRUDService } from './page-crud.service';

@Injectable({
  providedIn: 'root',
})
export class ThuongHieuService extends PagedCRUDService<
  number,
  ThuongHieuDto,
  CreateUpdateThuongHieuDto,
  PageLookUpDto
> {
  constructor(http: HttpService) {
    super(http, 'thuonghieus');
  }
}
