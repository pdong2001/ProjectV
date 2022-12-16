import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../models/ServiceResponse.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class BlobService {
  constructor(private http: HttpService) {}

  upload(
    files: FileList | File[],
    options?: { name?: string; folder?: string }
  ): Observable<ServiceResponse<string[]>> {
    const data = new FormData();
    if (options?.name) {
      data.append('name', options.name);
    }
    if (options?.folder) {
      data.append('folder', options.folder);
    }
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      data.append(file.name, file, file.name);
    }
    const url = 'api/blobStorages';
    return this.http.post<ServiceResponse<string[]>>(url, data);
  }
}
