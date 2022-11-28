import { Injectable } from '@angular/core';
import { CreateUpdateLoaiSPDto } from '../models/LoaiSPs/CreateUpdateLoaiSPDto.model';
import { LoaiSPDto } from '../models/LoaiSPs/LoaiSPDto.model';
import { PageLookUpDto } from '../models/PageLookUpDto.model';
import { HttpService } from './http.service';
import { PagedCRUDService } from './page-crud.service';

@Injectable({
  providedIn: 'root',
})
export class LoaiSPService extends PagedCRUDService<
  number,
  LoaiSPDto,
  CreateUpdateLoaiSPDto,
  PageLookUpDto
> {
  constructor(http: HttpService) {
    super(http, 'LoaiSPs');
  }
}
