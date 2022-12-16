import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'externalUrl',
})
export class ExternalUrlPipe implements PipeTransform {
  transform(value: string | null | undefined, ...args: unknown[]): string {
    if (value) {
      if (!value.startsWith('http')) {
        return environment.REST_API_SERVER + '/api/BlobStorages/' + value;
      }
      return value;
    } else return '';
  }
}
