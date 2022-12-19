import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { ChiTietDto } from 'src/app/Shared/models/ChiTietSPs/ChiTietDto.model';
import { ChiTietSPLookUpDto } from 'src/app/Shared/models/ChiTietSPs/ChiTietSPLookUpDto.model';
import { CreateUpdateChiTietDto } from 'src/app/Shared/models/ChiTietSPs/CreateUpdateChiTietDto.model';
import { SanPhamDto } from 'src/app/Shared/models/SanPhams/SanPhamDto.model';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { ChiTietSPService } from 'src/app/Shared/services/chi-tiet-sp.service';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { SanPhamService } from 'src/app/Shared/services/san-pham.service';

@Component({
  selector: 'app-ds-chi-tiet-sp',
  templateUrl: './ds-chi-tiet-sp.component.html',
  styleUrls: ['./ds-chi-tiet-sp.component.css'],
})
export class DSChiTietSPComponent implements OnInit {
  @ViewChild(Table) table!: Table;
  dsSanPham: SanPhamDto[] = [];
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }
  @Input('sanpham')
  public set sanPham(value: SanPhamDto | undefined) {
    this._sanPham = value;
    this.loadChiTietSP();
  }
  private _sanPham: SanPhamDto | undefined;
  public get sanPham(): SanPhamDto | undefined {
    return this._sanPham;
  }
  @Output('sanPhamChange') sanPhamChange = new EventEmitter<SanPhamDto>();
  // Component data variables
  public items: ChiTietDto[] = [];

  // Component state variables
  public tableOffsetTop: number = 0;
  public selectedItems: ChiTietDto[] = [];
  public selectedItem: ChiTietDto | undefined;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;

  constructor(
    private chiTietSPService: ChiTietSPService,
    private message: MessageService,
    private sanPhamService: SanPhamService,
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

  public loadChiTietSP() {
    if (this.sanPham?.id) {
      this.loading = true;
      const payload: ChiTietSPLookUpDto = {};
      payload.pageIndex = 1;
      payload.pageSize = 999999;
      payload.idSanPham = this.sanPham.id;
      this.chiTietSPService.search(payload).subscribe({
        next: (res) => {
          if (res.success) {
            if (res.data?.items) {
              res.data.items.forEach((item) => {
                item.sanPham = this.sanPham;
              });
            }
            this.items = res.data?.items || [];
          }
        },
        complete: () => {
          this.loading = false;
        },
      });
    } else {
      this.items = [];
    }
  }

  public showAdd() {
    return;
    this.selectedItem = new ChiTietDto();
    this.showDialog = true;
  }

  public showEdit(item: ChiTietDto) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  public showDelete() {}

  public save(data: CreateUpdateChiTietDto) {
    let resposne: Observable<ServiceResponse<ChiTietDto>>;
    if (this.sanPham?.id) data.idSanPham = this.sanPham.id;
    else {
      return;
    }
    const id = this.selectedItem?.id;
    if (id) {
      resposne = this.chiTietSPService.update(id, data);
    } else {
      resposne = this.chiTietSPService.create(data);
    }
    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.chiTietSPService.get(res.data.id).subscribe((res) => {
            if (res.data && res.success) {
              if (id) {
                const index = this.items.findIndex((i) => i.id === id);
                if (index >= 0) {
                  this.items[index] = res.data;
                  this.message.add({
                    severity: 'success',
                    detail: 'Cập nhật chi tiết sản phẩm thành công.',
                  });
                }
              } else {
                this.items = [...this.items, res.data];
                this.message.add({
                  severity: 'success',
                  detail: 'Thêm chi tiết sản phẩm thành công.',
                });
              }
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
