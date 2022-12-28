import { ChiTietDto } from '../ChiTietSPs/ChiTietDto.model';
import { HoaDonBanDto } from './HoaDonBanDto.model';

export interface CTDonBanDto {
  id: number;
  donGia: number;
  soLuong: number;
  hoaDonId: number;
  sanPhamId: number;
  sanPham?: ChiTietDto | null;
  hoaDon?: HoaDonBanDto | null;
}
