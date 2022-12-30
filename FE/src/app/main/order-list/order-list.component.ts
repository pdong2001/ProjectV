import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { ChiTietDto } from 'src/app/Shared/models/ChiTietSPs/ChiTietDto.model';
import { OrderStatus } from 'src/app/Shared/models/Enums/OrderStatus.enum';
import { CreateUpdateHoaDonBanDto } from 'src/app/Shared/models/HoaDonBans/CreateUpdateHoaDonBanDto.model';
import { CTDonBanDto } from 'src/app/Shared/models/HoaDonBans/CTDonBanDto.model';
import { HoaDonBanDto } from 'src/app/Shared/models/HoaDonBans/HoaDonBanDto.model';
import { HoaDonBanLookUpDto } from 'src/app/Shared/models/HoaDonBans/HoaDonBanLookUpDto.model';
import { KhachHangDto } from 'src/app/Shared/models/KhachHangs/KhachHangDto.model';
import { ServiceResponse } from 'src/app/Shared/models/ServiceResponse.model';
import { BreadCrumbService } from 'src/app/Shared/services/client/bread-crumb.service';
import { DonBanService } from 'src/app/Shared/services/don-ban.service';
import { KhachHangService } from 'src/app/Shared/services/khach-hang.service';
import { SanPhamService } from 'src/app/Shared/services/san-pham.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  @Input('idKhachHang')
  public set idKhachHang(value: number | undefined) {
    this._idKhachHang = value;
    this.loadData();
  }
  private _idKhachHang: number | undefined;
  public get idKhachHang(): number | undefined {
    return this._idKhachHang;
  }
  @ViewChild(Table) table!: Table;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.tableOffsetTop = this.table.el.nativeElement.offsetTop;
  }
  // Component data variables
  public dsSanPham: ChiTietDto[] = [];
  public items: HoaDonBanDto[] = [];
  public dsKhachHang: KhachHangDto[] = [];
  // Component state variables
  public formVisible: boolean = false;
  public tableOffsetTop: number = 0;
  public selectedItems: HoaDonBanDto[] = [];
  public selectedItem: HoaDonBanDto | undefined;
  public btnItems: MenuItem[];
  public loading: boolean = false;
  public showDialog: boolean = false;
  public form: FormGroup;
  public OrderStatus = OrderStatus;
  private _selectedKH: KhachHangDto | undefined;
  public get selectedKH(): KhachHangDto | undefined {
    return this._selectedKH;
  }
  public set selectedKH(value: KhachHangDto | undefined) {
    this._selectedKH = value;
  }
  public orderStatuses: any[];
  public dsChiTiet: CTDonBanDto[] = [];
  public dsChiTietSP: ChiTietDto[] = [];
  public selectedStatus: OrderStatus | undefined;
  constructor(
    private khachHangService: KhachHangService,
    private donBanService: DonBanService,
    private message: MessageService,
    private sanPhamService: SanPhamService,
    private confirmation: ConfirmationService,
    formBuilder: FormBuilder,
    breadCrumb: BreadCrumbService
  ) {
    this.orderStatuses = OrderStatus.getList();
    this.form = formBuilder.group({
      xa: [''],
      tinh: [''],
      huyen: [''],
      diaChi: [''],
    });
    breadCrumb.setPageTitle('Quản lý đơn đặt hàng');
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
    this.loadKH();
  }

  public loadKH() {
    this.khachHangService.getList().subscribe((res) => {
      if (res.data) {
        this.dsKhachHang = res.data;
      }
    });
  }

  ctToDelete: number[] = [];
  public delete(id: number) {
    const index = this.dsChiTiet.findIndex((s) => s.sanPhamId == id);
    if (index >= 0) {
      this.ctToDelete.push(id);
      this.dsChiTiet.splice(index, 1);
    }
  }
  public addCT(sp: ChiTietDto, sl: number) {
    const index = this.dsChiTiet.findIndex((s) => s.sanPhamId == sp.id);
    if (index >= 0) {
      const ct = this.dsChiTiet[index];
      ct.soLuong += sl;
      this.dsChiTiet[index] = ct;
    } else {
      this.dsChiTiet.unshift({
        sanPhamId: sp.id,
        sanPham: sp,
        soLuong: sl,
        donGia: sp.gia,
        hoaDonId: 0,
        hoaDon: this.selectedItem,
        id: 0,
      });
      console.log(this.dsChiTiet);
    }
  }

  public loadDSSP() {
    this.sanPhamService.getList().subscribe({
      next: (res) => {
        if (res.success) {
          if (res.data) {
            this.dsSanPham = res.data.flatMap((s) => {
              if (s.chiTietSP) {
                s.chiTietSP.forEach((ct) => {
                  ct.sanPham = { ...s };
                  ct.sanPham.chiTietSP = [];
                });
              }
              return s.chiTietSP ?? [];
            });
            console.log(this.dsSanPham);
          }
        }
      },
    });
  }
  public totalRecords: number = 0;

  private _start?: Date | undefined;
  public get start(): Date | undefined {
    return this._start;
  }
  public set start(value: Date | undefined) {
    this._start = value;
    this.loadData();
  }
  private _end?: Date | undefined;
  public get end(): Date | undefined {
    return this._end;
  }
  public set end(value: Date | undefined) {
    if (value) this._end = value;
    else this._end = new Date();
    this.loadData();
  }
  public loadData() {
    this.loading = true;
    const payload: HoaDonBanLookUpDto = {
      pageIndex: 1,
      pageSize: 999999,
      start: this.start,
      end: this.end,
      status: this.selectedStatus,
      idKhachHang: this.idKhachHang,
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

  public submit() {
    if (this.form.valid) {
      const payload = { ...this.form.value };
      payload.chiTiet = this.dsChiTiet.filter((c) => c.id);
      payload.hoaDonId = this.selectedItem?.id;
      this.save(payload);
    }
  }

  public add() {
    this.selectedItem = undefined;
    this.form.reset();
    this.formVisible = true;
  }

  public edit(item: HoaDonBanDto) {
    this.selectedItem = item;
    this.selectedKH = this.dsKhachHang.find((kh) => item.idKhachHang == kh.id);
    console.log(this.selectedKH);
    this.form.patchValue(item);
    this.formVisible = true;
  }

  public save(data: CreateUpdateHoaDonBanDto) {
    let resposne: Observable<ServiceResponse<HoaDonBanDto>>;
    const id = this.selectedItem?.id;
    if (id) {
      resposne = this.donBanService.update(id, data);
    } else {
      resposne = this.donBanService.create(data);
    }

    resposne.subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.donBanService.get(res.data.id).subscribe((res) => {
            if (res.data && res.success) {
              this.loadData();
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
  public updateStatus(status: OrderStatus) {
    if (this.selectedItem) {
      this.donBanService
        .capNhatTrangThai(this.selectedItem.id, status)
        .subscribe((res) => {
          if (res.success) {
            if (this.selectedItem) this.selectedItem.status = status;
            this.message.add({
              detail: 'Cập nhật trạng thái thành công',
              severity: 'success',
            });
          }
        });
    }
  }

  public removeCT(item: CTDonBanDto) {
    if (this.selectedItem) {
      this.donBanService.delete(item.id).subscribe({
        next: (res) => {
          if (res.success) {
            if (this.selectedItem) {
              const index = this.selectedItem.chiTiet?.findIndex(
                (c) => c.id == item.id
              );
              if (index && index >= 0) {
                this.selectedItem.chiTiet?.splice(index, 1);
              }
            }
          }
        },
      });
    }
  }

  public deleteDonBan() {
    if (this.selectedItems.length) {
      if (
        this.selectedItems.find(
          (i) =>
            i.status === OrderStatus.HoanThanh ||
            i.status === OrderStatus.DangGiao ||
            i.status === OrderStatus.ChapNhan
        )
      ) {
        this.message.add({
          detail: 'Bạn không thể xóa đơn hàng này',
          severity: 'error',
        });
        return;
      }
      this.confirmation.confirm({
        message: `Bạn có chắc chắn muốn xóa ${this.selectedItems.length} đơn hàng`,
      });
    }
  }
}
