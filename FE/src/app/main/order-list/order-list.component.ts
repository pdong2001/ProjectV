import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { DonNhapLookUpDto } from 'src/app/Shared/models/DonNhaps/DonNhapLookUpDto.model';
import { CreateUpdateHoaDonBanDto } from 'src/app/Shared/models/HoaDonBans/CreateUpdateHoaDonBanDto.model';
import { HoaDonBanDto } from 'src/app/Shared/models/HoaDonBans/HoaDonBanDto.model';
import { HoaDonBanLookUpDto } from 'src/app/Shared/models/HoaDonBans/HoaDonBanLookUpDto.model';
import { SanPhamDto } from 'src/app/Shared/models/SanPhams/SanPhamDto.model';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { DonBanService } from 'src/app/Shared/services/don-ban.service';
import { SanPhamService } from 'src/app/Shared/services/san-pham.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  @ViewChild(Table) table!: Table;
  dsSanPham: SanPhamDto[] = [];
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }
  // Component data variables
  public items: HoaDonBanDto[] = [];

  // Component state variables
  public tableOffsetTop: number = 0;
  public selectedItems: HoaDonBanDto[] = [];
  public selectedItem: HoaDonBanDto | undefined;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;

  constructor(
    private donBanService: DonBanService,
    private message: MessageService,
    private sanPhamService: SanPhamService,
    private confirmation: ConfirmationService,
    breadCrumb: BreadCrumbService
  ) {
    breadCrumb.setPageTitle('Quản lý chi tiết sản phẩm');
    this.btnItems = [{ label: 'Xóa đã chọn', icon: 'fa-regular fa-trash-can' }];
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
    }, 300);
  }

  ngOnInit(): void {
    this.loadDSSP();
    this.loadData();
  }

  public loadDSSP() {
    this.sanPhamService.getList().subscribe({
      next: (res) => {
        if (res.success) {
          this.dsSanPham = res.data ?? [];
        }
      },
    });
  }
  public totalRecords: number = 0;

  public loadData() {
    this.loading = true;
    const payload: HoaDonBanLookUpDto = {
      pageIndex: 1,
      pageSize: 999999,
    };
    this.donBanService.search(payload).subscribe({
      next: (res) => {
        if (res.success) {
          this.items = res.data?.items || [];
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  public showAdd() {
    this.selectedItem = undefined;
    this.showDialog = true;
  }

  public showEdit(item: HoaDonBanDto) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  public showDelete(input: HoaDonBanDto) {
    this.confirmation.confirm({
      message: 'Bạn có chắc chắn muốn xóa đơn nhập hàng này?',
      accept: () => {
        this.loading = true;
        this.donBanService.delete(input.id).subscribe({
          next: (res) => {
            if (res.success) {
              this.items = this.items.filter((i) => i.id !== input.id);
            }
          },
          complete: () => (this.loading = true),
        });
      },
    });
  }

  public save(data: CreateUpdateHoaDonBanDto) {
    let resposne: Observable<ServiceResponse<HoaDonBanDto>>;
    resposne = this.donBanService.create(data);

    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.donBanService.get(res.data.id).subscribe((res) => {
            if (res.data && res.success) {
              this.items = [res.data, ...this.items];
              this.message.add({
                severity: 'success',
                detail: 'Thêm chi tiết sản phẩm thành công.',
              });

              this.showDialog = false;
            }
          });
        } else {
          this.message.add({
            severity: 'warning',
            detail: 'Lưu thay đổi thất bại',
          });
        }
      },
    });
  }
}
