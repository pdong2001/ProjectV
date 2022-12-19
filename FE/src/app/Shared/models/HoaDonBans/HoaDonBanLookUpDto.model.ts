export interface HoaDonBanLookUpDto {
  pageSize: number;
  pageIndex: number;
  sort?: string;
  search?: string;
  columns?: string;
  sanPhamId?: number;
  idKhachHang?: number;
}
