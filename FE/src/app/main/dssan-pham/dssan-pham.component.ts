import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { LoaiSPDto } from 'src/app/Shared/models/LoaiSPs/LoaiSPDto.model';
import { CreateUpdateSanPhamDto } from 'src/app/Shared/models/SanPhams/CreateUpdateSanPhamDto.model';
import { SanPhamDto } from 'src/app/Shared/models/SanPhams/SanPhamDto.model';
import { SanPhamLookUpDto } from 'src/app/Shared/models/SanPhams/SanPhamLookUpDto.model';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { ThuongHieuDto } from 'src/app/Shared/models/ThuongHieus/ThuongHieuDto.model';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { LoaiSPService } from 'src/app/Shared/services/loai-sp.service';
import { SanPhamService } from 'src/app/Shared/services/san-pham.service';
import { ThuongHieuService } from 'src/app/Shared/services/thuong-hieu.service';

@Component({
  selector: 'app-dssan-pham',
  templateUrl: './dssan-pham.component.html',
  styleUrls: ['./dssan-pham.component.css'],
})
export class DSSanPhamComponent implements OnInit {
  @ViewChild(Table) table!: Table;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }

  // Component data variables
  public items: SanPhamDto[] = [];

  // Component state variables
  public tableOffsetTop: number = 0;
  public selectedItems: SanPhamDto[] = [];
  public selectedItem: SanPhamDto | null = null;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;
  public dsLoai: LoaiSPDto[] = [];
  public dsThuongHieu: ThuongHieuDto[] = [];

  constructor(
    private sanPhamService: SanPhamService,
    private message: MessageService,
    private loaiSpService: LoaiSPService,
    private thuongHieuService: ThuongHieuService,
    breadCrumb: BreadCrumbService
  ) {
    breadCrumb.setPageTitle('Quản lý sản phẩm');
    this.btnItems = [{ label: 'Xóa đã chọn', icon: 'fa-regular fa-trash-can' }];
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
    }, 300);
  }

  ngOnInit(): void {
    this.loadLoaiSP();
    this.loadThuongHieu();
  }

  public loadLoaiSP() {
    this.loaiSpService.getList().subscribe((res) => {
      if (res.success) {
        this.dsLoai = res.data ?? [];
      }
    });
  }
  public loadThuongHieu() {
    this.thuongHieuService.getList().subscribe((res) => {
      if (res.success) {
        this.dsThuongHieu = res.data ?? [];
      }
    });
  }

  public loadData() {
    this.loadSanPham(this.table.createLazyLoadMetadata());
  }

  public totalRecords: number = 0;

  public loadSanPham(e: any) {
    this.loading = true;
    const payload = new SanPhamLookUpDto();
    payload.pageIndex = e.first / e.rows + 1;
    payload.pageSize = e.rows;
    payload.search = e.globalFilter;
    payload.columns = (e.multiSortMeta as any[])?.reduce(
      (pre, value) =>
        pre + `${value.field} ${value.order === 1 ? 'ASC' : 'DESC'},`,
      ''
    );
    this.sanPhamService.search(payload).subscribe({
      next: (res) => {
        if (res.success) {
          this.items = res.data?.items || [];
          this.totalRecords = res.data?.total ?? 0;
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  public showAdd() {
    this.selectedItem = new SanPhamDto();
    this.showDialog = true;
  }

  public showEdit(item: SanPhamDto) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  public showDelete() {}

  public save(data: CreateUpdateSanPhamDto) {
    let resposne: Observable<ServiceResponse<SanPhamDto>>;
    const id = this.selectedItem?.id;
    if (id) {
      resposne = this.sanPhamService.update(id, data);
    } else {
      resposne = this.sanPhamService.create(data);
    }
    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.sanPhamService.get(res.data.id).subscribe((res) => {
            if (res.data && res.success) {
              if (id) {
                const index = this.items.findIndex((i) => i.id === id);
                if (index >= 0) {
                  this.items[index] = res.data;
                  this.message.add({
                    severity: 'success',
                    detail: 'Cập nhật sản phẩm thành công.',
                  });
                }
              } else {
                this.items = [...this.items, res.data];
                this.message.add({
                  severity: 'success',
                  detail: 'Thêm sản phẩm thành công.',
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
