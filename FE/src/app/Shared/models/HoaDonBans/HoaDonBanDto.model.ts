import { ChiTietDto } from '../ChiTietSPs/ChiTietDto.model';
import { OrderStatus } from '../Enums/OrderStatus.enum';
import { KhachHangDto } from '../KhachHangs/KhachHangDto.model';
import { CTDonBanDto } from './CTDonBanDto.model';

export interface HoaDonBanDto {
  id: number;
  idKhachHang: number;
  xa?: string | null;
  tinh?: string | null;
  huyen?: string | null;
  diaChi?: string | null;
  deletedBy?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  isDeleted?: boolean;
  createdAt: Date;
  sanPham?: ChiTietDto | null;
  deletedAt?: Date | null;
  updatedAt?: Date | null;
  status: OrderStatus;
  khachHang?: KhachHangDto | null;
  chiTiet: CTDonBanDto[] | null;
  yeuCauHuy : boolean;
}
