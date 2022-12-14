import { SanPhamDto } from '../SanPhams/SanPhamDto.model';

export class ChiTietDto {
  id: number = 0;
  gia: number = 0;
  idSanPham: number = 0;
  sanPham?: SanPhamDto;
  code: string | null = '';
  moTa: string | null = '';
  tskt: string | null = '';
  donVi: string | null = '';
  anhCT: string | null = '';
  mauSac: string | null = '';
  soLuong: string | null = '';
  kichThuoc: number = 0;
	uuDai: number = 0;
}
