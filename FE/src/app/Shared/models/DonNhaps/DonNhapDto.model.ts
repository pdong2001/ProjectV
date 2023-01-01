import { SanPhamDto } from '../SanPhams/SanPhamDto.model';

export interface DonNhapDto {
  id: number;
  gia: number;
  soLuong: number;
  idSanPham: number;
  dvt: string | undefined;
  code: string | undefined;
  moTa: string | undefined;
  donVi: string | undefined;
  anhCT: string | undefined;
  ten: string | undefined;
  kichThuoc: any;
  createdAt: Date;
  sanPham: SanPhamDto | undefined;
}
