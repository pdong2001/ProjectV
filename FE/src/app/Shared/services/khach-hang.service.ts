import { Injectable } from '@angular/core';
import { CreateUpdateKhachHangDto } from '../models/KhachHangs/CreateUpdateKhachHangDto.model';
import { KhachHangDto } from '../models/KhachHangs/KhachHangDto.model';
import { PageLookUpDto } from '../models/PageLookUpDto.model';
import { HttpService } from './http.service';
import { PagedCRUDService } from './page-crud.service';

@Injectable({
  providedIn: 'root',
})
export class KhachHangService extends PagedCRUDService<
  number,
  KhachHangDto,
  CreateUpdateKhachHangDto,
  PageLookUpDto
> {
  constructor(http: HttpService) {
    super(http, 'KhachHangs');
  }
}
