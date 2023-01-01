import { Injectable } from '@angular/core';
import { PageLookUpDto } from '../models/PageLookUpDto.model';
import { CreateUpdateSettingDto } from '../models/Settings/CreateUpdateSettingDto.model';
import { SettingDto } from '../models/Settings/SettingDto.model';
import { HttpService } from './http.service';
import { PagedCRUDService } from './page-crud.service';

@Injectable({
  providedIn: 'root',
})
export class SettingService extends PagedCRUDService<
  number,
  SettingDto,
  CreateUpdateSettingDto,
  PageLookUpDto
> {
  constructor(http: HttpService) {
    super(http, 'settings');
  }
}
