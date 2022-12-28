import { CreateUpdateChiTietDto } from '../ChiTietSPs/CreateUpdateChiTietDto.model';

export interface CreateUpdateHoaDonBanDto {
  idKhachHang: number;
  xa?: string | null;
  tinh?: string | null;
  huyen?: string | null;
  diaChi?: string | null;
  chiTiet?: CreateUpdateChiTietDto[] | null;
}
