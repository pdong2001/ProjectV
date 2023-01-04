import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CMS | OFarm';
  constructor(primeConfig: PrimeNGConfig) {
    primeConfig.ripple = true;
    primeConfig.setTranslation({
      accept: 'Chấp nhận',
      reject: 'Hủy',
      emptyFilterMessage: 'Không tìm thấy thông tin phù hợp',
      emptyMessage: 'Không có thông tin',
    });
  }
}
