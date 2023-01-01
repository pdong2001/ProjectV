import { SanPhamDto } from "../SanPhams/SanPhamDto.model";
import { SanPham } from "../Data/Models/SanPham.model";

export class LoaiSPDto {
	id: number = 0;
	anh: string | null = "";
	tenLSP: string | null = "";
	dsSanPham: SanPhamDto[] | null = [];
	dsSanPham: SanPham[] | null = [];
}