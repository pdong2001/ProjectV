import { OrderStatus } from '../Enums/OrderStatus.enum';

export interface HoaDonBanLookUpDto {
  pageSize: number;
  pageIndex: number;
  sort?: string;
  search?: string;
  columns?: string;
  status?: OrderStatus;
  idKhachHang?: number;
  start?: Date;
  end?: Date;
}
