import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { CreateUpdateLoaiSPDto } from 'src/app/Shared/models/LoaiSPs/CreateUpdateLoaiSPDto.model';
import { LoaiSPDto } from 'src/app/Shared/models/LoaiSPs/LoaiSPDto.model';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { LoaiSPService } from 'src/app/Shared/services/loai-sp.service';

@Component({
  selector: 'app-ds-loai-sp',
  templateUrl: './ds-loai-sp.component.html',
  styleUrls: ['./ds-loai-sp.component.css'],
})
export class DsLoaiSPComponent implements OnInit {
  @ViewChild(Table) table!: Table;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }

  // Component data variables
  public items: LoaiSPDto[] = [];

  // Component state variables
  public tableOffsetTop: number = 0;
  public selectedItems: LoaiSPDto[] = [];
  public selectedItem: LoaiSPDto | null = null;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;

  constructor(
    private loaiSPService: LoaiSPService,
    private message: MessageService,
    private confirmation: ConfirmationService,
    breadCrumb: BreadCrumbService
  ) {
    breadCrumb.setPageTitle('Quản lý loại sản phẩm');
    this.btnItems = [
      {
        label: 'Xóa đã chọn',
        icon: 'fa-regular fa-trash-can',
        command: () => this.showDelete(),
      },
    ];
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
    this.loaiSPService.getList().subscribe({
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
    this.selectedItem = new LoaiSPDto();
    this.showDialog = true;
  }

  public showEdit(item: LoaiSPDto) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  public showDelete() {
    this.confirmation.confirm({
      message: `Bạn có chắc chắn muốn xóa ${this.selectedItems.length}`,
      header: 'Xác nhận',
      accept: () => {
        this.loading = true;
        this.loaiSPService
          .deleteMany(this.selectedItems.map((item) => item.id))
          .subscribe({
            next: (res) => {
              if (res.success) {
                this.message.add({
                  detail: `Đã xóa ${res.data} loại`,
                  severity: 'success',
                });
                this.items = this.items.filter(
                  (i) =>
                    this.selectedItems.findIndex((d) => d.id === i.id) === -1
                );
                this.selectedItems = [];
              } else {
                this.message.add({
                  detail: `Đã xóa ${res.data} loại`,
                  severity: 'success',
                });
              }
            },
            complete: () => (this.loading = false),
          });
      },
    });
  }

  public save(data: CreateUpdateLoaiSPDto) {
    let resposne: Observable<ServiceResponse<LoaiSPDto>>;
    const id = this.selectedItem?.id;
    if (id) {
      resposne = this.loaiSPService.update(id, data);
    } else {
      resposne = this.loaiSPService.create(data);
    }
    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.loaiSPService.get(res.data.id).subscribe((res) => {
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
