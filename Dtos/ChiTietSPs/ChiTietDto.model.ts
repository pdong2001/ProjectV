import { SanPhamDto } from "../SanPhams/SanPhamDto.model";
import { SanPham } from "../Data/Models/SanPham.model";

export class ChiTietDto {
	id: number = 0;
	gia: number = 0;
	soLuong: number = 0;
	idSanPham: number = 0;
	dvt: string | null = "";
	code: string | null = "";
	moTa: string | null = "";
	tskt: string | null = "";
	donVi: string | null = "";
	anhCT: string | null = "";
	mauSac: string | null = "";
	kichThuoc: any = 0;
	sanPham: SanPham | null = null;
	sanPham: SanPhamDto | null = null;
}