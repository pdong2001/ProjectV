import { LoaiSPDto } from "../LoaiSPs/LoaiSPDto.model";
import { ThuongHieuDto } from "../ThuongHieus/ThuongHieuDto.model";
import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";


export class SanPhamDto {
	id: number = 0;
	mota: string | null = "";
	tenSP: string | null = "";
	anhSP: string | null = "";
	uuDai: any = 0;
	loaiSP: LoaiSPDto | null = null;
	idLoaiSP: number | null = null;
	idThuongHieu: number | null = null;
	chiTietSP: ChiTietDto[] | null = [];
	thuongHieu: ThuongHieuDto | null = null;
}
