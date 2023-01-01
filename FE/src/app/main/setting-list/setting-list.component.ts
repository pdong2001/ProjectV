import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { SettingType } from 'src/app/Shared/models/Enums/SettingType.enum';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { CreateUpdateSettingDto } from 'src/app/Shared/models/Settings/CreateUpdateSettingDto.model';
import { SettingDto } from 'src/app/Shared/models/Settings/SettingDto.model';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { SettingService } from 'src/app/Shared/services/setting.service';

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.css'],
})
export class SettingListComponent implements OnInit {
  @ViewChild(Table) table!: Table;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }

  // Component data variables
  public items: SettingDto[] = [];

  // Component state variables
  public tableOffsetTop: number = 0;
  public selectedItems: SettingDto[] = [];
  public selectedItem: SettingDto | null = null;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;

  constructor(
    private settingService: SettingService,
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
    this.settingService.getList().subscribe({
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
    this.selectedItem = new SettingDto();
    this.showDialog = true;
  }

  public showEdit(item: SettingDto) {
    this.selectedItem = item;
    this.showDialog = true;
  }

  public showDelete() {
    this.confirmation.confirm({
      message: `Bạn có chắc chắn muốn xóa ${this.selectedItems.length}`,
      header: 'Xác nhận',
      accept: () => {
        this.loading = true;
        this.settingService
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
  public SettingType = SettingType;
  public save(data: CreateUpdateSettingDto) {
    let resposne: Observable<ServiceResponse<SettingDto>>;
    const id = this.selectedItem?.id;
    if (id) {
      resposne = this.settingService.update(id, data);
    } else {
      resposne = this.settingService.create(data);
    }
    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.settingService.get(res.data.id).subscribe((res) => {
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
