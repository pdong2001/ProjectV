import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { CreateUpdateKhachHangDto } from 'src/app/Shared/models/KhachHangs/CreateUpdateKhachHangDto.model';
import { KhachHangDto } from 'src/app/Shared/models/KhachHangs/KhachHangDto.model';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { KhachHangService } from 'src/app/Shared/services/khach-hang.service';

@Component({
  selector: 'app-dskhach-hang',
  templateUrl: './dskhach-hang.component.html',
  styleUrls: ['./dskhach-hang.component.css']
})
export class DSKhachHangComponent implements OnInit {
  @ViewChild(Table) table!: Table;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }

  // Component data variables
  public items: KhachHangDto[] = [];

  // Component state variables
  public tableOffsetTop: number = 0;
  public selectedItems: KhachHangDto[] = [];
  public selectedItem: KhachHangDto | null = null;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;

  constructor(
    private khachHangService: KhachHangService,
    private message: MessageService,
    breadCrumb: BreadCrumbService
  ) {
    breadCrumb.setPageTitle('Quản lý khách hàng');
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
    this.khachHangService.getList().subscribe({
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
    this.selectedItem = new KhachHangDto();
    this.showDialog = true;
  }

  public showEdit(item: KhachHangDto) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  public showDelete() {}

  public save(data: CreateUpdateKhachHangDto) {
    let resposne: Observable<ServiceResponse<KhachHangDto>>;
    const id = this.selectedItem?.id;
    if (id) {
      resposne = this.khachHangService.update(id, data);
    } else {
      resposne = this.khachHangService.create(data);
    }
    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.khachHangService.get(res.data.id).subscribe((res) => {
            if (res.data && res.success) {
              if (id) {
                const index = this.items.findIndex((i) => i.id === id);
                if (index >= 0) {
                  this.items[index] = res.data;
                  this.message.add({
                    severity: 'success',
                    detail: 'Cập nhật khách hàng thành công.',
                  });
                }
              } else {
                this.items = [...this.items, res.data];
                this.message.add({
                  severity: 'success',
                  detail: 'Thêm khách hàng thành công.',
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
