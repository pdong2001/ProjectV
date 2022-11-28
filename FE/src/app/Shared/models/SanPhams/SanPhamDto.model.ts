import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";
import { LoaiSPDto } from "../LoaiSPs/LoaiSPDto.model";
import { ThuongHieuDto } from "../ThuongHieus/ThuongHieuDto.model";

export class SanPhamDto {
	id: number = 0;
	tenSP: string | null = "";
	anhSP: string | null = "";
	uuDai: any = 0;
	loaiSP: LoaiSPDto | null = null;
	idLoaiSP: number | null = null;
	thuongHieu: ThuongHieuDto | null = null;
	idThuongHieu: number | null = null;
	chiTietSP: ChiTietDto[] | null = [];
}
