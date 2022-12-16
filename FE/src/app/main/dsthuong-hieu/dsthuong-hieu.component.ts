import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { CreateUpdateThuongHieuDto } from 'src/app/Shared/models/ThuongHieus/CreateUpdateThuongHieuDto.model';
import { ThuongHieuDto } from 'src/app/Shared/models/ThuongHieus/ThuongHieuDto.model';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { ThuongHieuService } from 'src/app/Shared/services/thuong-hieu.service';

@Component({
  selector: 'app-dsthuong-hieu',
  templateUrl: './dsthuong-hieu.component.html',
  styleUrls: ['./dsthuong-hieu.component.css']
})
export class DSThuongHieuComponent implements OnInit {

  @ViewChild(Table) table!: Table;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }

  // Component data variables
  public items: ThuongHieuDto[] = [];

  // Component state variables
  public tableOffsetTop: number = 0;
  public selectedItems: ThuongHieuDto[] = [];
  public selectedItem: ThuongHieuDto | null = null;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;

  constructor(
    private thuongHieuService: ThuongHieuService,
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
    this.thuongHieuService.getList().subscribe({
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
    this.selectedItem = new ThuongHieuDto();
    this.showDialog = true;
  }

  public showEdit(item: ThuongHieuDto) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  public showDelete() {}

  public save(data: CreateUpdateThuongHieuDto) {
    let resposne: Observable<ServiceResponse<ThuongHieuDto>>;
    const id = this.selectedItem?.id;
    if (id) {
      resposne = this.thuongHieuService.update(id, data);
    } else {
      resposne = this.thuongHieuService.create(data);
    }
    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.thuongHieuService.get(res.data.id).subscribe((res) => {
            if (res.data && res.success) {
              if (id) {
                const index = this.items.findIndex((i) => i.id === id);
                if (index >= 0) {
                  this.items[index] = res.data;
                  this.message.add({
                    severity: 'success',
                    detail: 'Cập nhật loại sản phẩm thành công.',
                  });
                }
              } else {
                this.items = [...this.items, res.data];
                this.message.add({
                  severity: 'success',
                  detail: 'Thêm loại sản phẩm thành công.',
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
