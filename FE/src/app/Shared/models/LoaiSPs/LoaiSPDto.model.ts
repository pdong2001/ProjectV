import { SanPhamDto } from "../SanPhams/SanPhamDto.model";

export class LoaiSPDto {
	id: number = 0;
	anh: string | null = "";
	tenLSP: string | null = "";
	dsSanPham: SanPhamDto[] | null = [];
}