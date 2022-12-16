import { Injectable } from '@angular/core';
import { ChiTietDto } from '../models/ChiTietSPs/ChiTietDto.model';
import { ChiTietSPLookUpDto } from '../models/ChiTietSPs/ChiTietSPLookUpDto.model';
import { CreateUpdateChiTietDto } from '../models/ChiTietSPs/CreateUpdateChiTietDto.model';
import { HttpService } from './http.service';
import { PagedCRUDService } from './page-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ChiTietSPService extends PagedCRUDService<
  number,
  ChiTietDto,
  CreateUpdateChiTietDto,
  ChiTietSPLookUpDto
> {
  constructor(http: HttpService) {
    super(http, 'ChiTietSPs');
  }
}
