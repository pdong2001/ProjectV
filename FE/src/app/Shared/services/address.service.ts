import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { Province } from '../models/Address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private httpClient: HttpClient) {}
  private cache: Province[] | undefined;
  public getAddress() {
    if (this.cache?.length) {
      return of(this.cache);
    }
    return this.httpClient
      .get<Province[]>('/assets/json/address.json', {})
      .pipe(
        tap((res) => {
          this.cache = res;
        })
      );
  }
}
