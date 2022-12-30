import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { ChiTietSPLookUpDto } from 'src/app/Shared/models/ChiTietSPs/ChiTietSPLookUpDto.model';
import { CreateDonNhapDto } from 'src/app/Shared/models/DonNhaps/CreateDonNhapDto.model';
import { DonNhapDto } from 'src/app/Shared/models/DonNhaps/DonNhapDto.model';
import { DonNhapLookUpDto } from 'src/app/Shared/models/DonNhaps/DonNhapLookUpDto.model';
import { SanPhamDto } from 'src/app/Shared/models/SanPhams/SanPhamDto.model';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { ChiTietSPService } from 'src/app/Shared/services/chi-tiet-sp.service';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { DonNhapService } from 'src/app/Shared/services/don-nhap.service';
import { SanPhamService } from 'src/app/Shared/services/san-pham.service';

@Component({
  selector: 'app-import-list',
  templateUrl: './import-list.component.html',
  styleUrls: ['./import-list.component.css'],
})
export class ImportListComponent implements OnInit {
  @ViewChild(Table) table!: Table;
  dsSanPham: SanPhamDto[] = [];
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }
  // Component data variables
  public items: DonNhapDto[] = [];

  // Component state variables
  public tableOffsetTop: number = 0;
  public selectedItems: DonNhapDto[] = [];
  public selectedItem: DonNhapDto | undefined;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;

  constructor(
    private donNhapService: DonNhapService,
    private message: MessageService,
    private sanPhamService: SanPhamService,
    private confirmation: ConfirmationService,
    breadCrumb: BreadCrumbService
  ) {
    breadCrumb.setPageTitle('Quản lý nhâp hàng');
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
    const payload: DonNhapLookUpDto = {
      pageIndex: 1,
      pageSize: 999999,
    };
    this.donNhapService.search(payload).subscribe({
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

  public showDetail(item: DonNhapDto) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  public showDelete(input: DonNhapDto) {
    this.confirmation.confirm({
      message: 'Bạn có chắc chắn muốn xóa đơn nhập hàng này?',
      accept: () => {
        this.loading = true;
        this.donNhapService.delete(input.id).subscribe({
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

  public save(data: CreateDonNhapDto) {
    let resposne: Observable<ServiceResponse<DonNhapDto>>;
    resposne = this.donNhapService.create(data);

    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.donNhapService.get(res.data.id).subscribe((res) => {
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
