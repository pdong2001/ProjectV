import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { CreateUpdateSanPhamDto } from 'src/app/Shared/models/SanPhams/CreateUpdateSanPhamDto.model';
import { SanPhamDto } from 'src/app/Shared/models/SanPhams/SanPhamDto.model';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { LoaiSPService } from 'src/app/Shared/services/loai-sp.service';
import { SanPhamService } from 'src/app/Shared/services/san-pham.service';

@Component({
  selector: 'app-dssan-pham',
  templateUrl: './dssan-pham.component.html',
  styleUrls: ['./dssan-pham.component.css']
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

  constructor(
    private sanPhamService: SanPhamService,
    private message: MessageService,
    breadCrumb: BreadCrumbService
  ) {
    breadCrumb.setPageTitle('Quản lý loại sản phẩm');
    this.btnItems = [{ label: 'Xóa đã chọn', icon: 'fa-regular fa-trash-can' }];
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
    }, 300);
  }

  ngOnInit(): void {
    this.loadData();
  }


  public loadData() {
    this.loading = true;
    this.sanPhamService.getList().subscribe({
      next: (res) => {
        if (res.success) {
          this.items = res.data || [];
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
                    detail: 'Cập nhật cộng tác viên thành công.',
                  });
                }
              } else {
                this.items = [...this.items, res.data];
                this.message.add({
                  severity: 'success',
                  detail: 'Thêm cộng tác viên thành công.',
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
