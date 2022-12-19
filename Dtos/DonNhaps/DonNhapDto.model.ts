import { SanPhamDto } from "../SanPhams/SanPhamDto.model";

export class DonNhapDto {
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
	createdAt!: Date;
	sanPham: SanPhamDto | null = null;
}