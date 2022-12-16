import { Injectable } from '@angular/core';
import { CreateUpdateSanPhamDto } from '../models/SanPhams/CreateUpdateSanPhamDto.model';
import { SanPhamDto } from '../models/SanPhams/SanPhamDto.model';
import { SanPhamLookUpDto } from '../models/SanPhams/SanPhamLookUpDto.model';
import { HttpService } from './http.service';
import { PagedCRUDService } from './page-crud.service';

@Injectable({
  providedIn: 'root',
})
export class SanPhamService extends PagedCRUDService<
  number,
  SanPhamDto,
  CreateUpdateSanPhamDto,
  SanPhamLookUpDto
> {
  constructor(http: HttpService) {
    super(http, 'sanphams');
  }
}
