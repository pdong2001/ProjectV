import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { DoanhSoDto } from 'src/app/Shared/models/HoaDonBans/DoanhSoDto.model';
import { DonBanService } from 'src/app/Shared/services/don-ban.service';

@Component({
  selector: 'app-thong-ke-doanh-so',
  templateUrl: './thong-ke-doanh-so.component.html',
  styleUrls: ['./thong-ke-doanh-so.component.css'],
})
export class ThongKeDoanhSoComponent implements OnInit {
  public data: DoanhSoDto[] = [];
  public loading: boolean = false;
  public start?: Date;
  public end: Date = new Date();
  constructor(private donBanService: DonBanService) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.loading = true;
    this.donBanService
      .doanhSo({
        start: this.start,
        end: this.end,
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.data = res.data;
          }
        },
      });
  }
}
