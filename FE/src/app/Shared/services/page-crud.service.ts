import { map, Observable } from 'rxjs';
import { PageResultDto } from '../models/PageResultDto.model';
import { ServiceResponse } from '../models/ServiceResponse.model';
import { HttpService } from './http.service';

export class PagedCRUDService<TKey, TDto, TUpSert, TLookUp> {
  public controller: string;
  public prefix: string = 'api/';
  constructor(protected http: HttpService, controller: string) {
    this.controller = controller;
  }

  public deleteMany(request: number[]): Observable<ServiceResponse<number>> {
    const url = `${this.prefix}${this.controller}/delete`;
    return this.http.post(url, request);
  }

  public get(id: TKey): Observable<ServiceResponse<TDto>> {
    const url = `${this.prefix}${this.controller}/${id}`;
    return this.http.get<ServiceResponse<TDto>>(url);
  }

  public create(payload: TUpSert): Observable<ServiceResponse<TDto>> {
    const url = `${this.prefix}${this.controller}`;
    return new Observable<ServiceResponse<TDto>>((sub) => {
      this.http.post<ServiceResponse<TKey>>(url, payload).subscribe((res) => {
        if (res.success && res.data) {
          this.get(res.data).subscribe((res) => sub.next(res));
        } else {
          sub.next({
            success: false,
            data: null,
            message: res.message,
          });
        }
      });
    });
  }

  public update(id: TKey, payload: TUpSert): Observable<ServiceResponse<TDto>> {
    const url = `${this.prefix}${this.controller}/${id}`;
    return new Observable<ServiceResponse<TDto>>((sub) => {
      this.http.put<ServiceResponse<never>>(url, payload).subscribe((res) => {
        if (res.success) {
          this.get(id).subscribe((res) => sub.next(res));
        } else {
          sub.next({
            success: false,
            data: null,
            message: res.message,
          });
        }
      });
    });
  }
  public getList(): Observable<ServiceResponse<TDto[]>> {
    const url = `${this.prefix}${this.controller}`;
    return this.http.get<ServiceResponse<TDto[]>>(url);
  }
  public search(
    request: TLookUp
  ): Observable<ServiceResponse<PageResultDto<TDto>>> {
    const url = `${this.prefix}${this.controller}/search`;
    return this.http.get<ServiceResponse<PageResultDto<TDto>>>(url, request);
  }
}
