import { Injectable } from '@angular/core';
import { CreateDonNhapDto } from '../models/DonNhaps/CreateDonNhapDto.model';
import { DonNhapDto } from '../models/DonNhaps/DonNhapDto.model';
import { DonNhapLookUpDto } from '../models/DonNhaps/DonNhapLookUpDto.model';
import { HttpService } from './http.service';
import { PagedCRUDService } from './page-crud.service';

@Injectable({
  providedIn: 'root',
})
export class DonNhapService extends PagedCRUDService<
  number,
  DonNhapDto,
  CreateDonNhapDto,
  DonNhapLookUpDto
> {
  constructor(http: HttpService) {
    super(http, 'DonNhaps');
  }
}
