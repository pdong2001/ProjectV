import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";
import { LoaiSP } from "../Data/Models/LoaiSP.model";
import { ThuongHieu } from "../Data/Models/ThuongHieu.model";
import { ChiTietSP } from "../Data/Models/ChiTietSP.model";

export class SanPhamDto {
	id: number = 0;
	tenSP: string | null = "";
	anhSP: string | null = "";
	uuDai: any = 0;
	loaiSP: LoaiSP | null = null;
	idLoaiSP: number | null = null;
	thuongHieu: ThuongHieu | null = null;
	idThuongHieu: number | null = null;
	chiTietSP: ChiTietDto[] | null = [];
	chiTietSP: ChiTietSP[] | null = [];
}