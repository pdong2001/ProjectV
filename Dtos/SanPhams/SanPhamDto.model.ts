import { LoaiSPDto } from "../LoaiSPs/LoaiSPDto.model";
import { ThuongHieuDto } from "../ThuongHieus/ThuongHieuDto.model";
import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";
import { LoaiSP } from "../Data/Models/LoaiSP.model";
import { ThuongHieu } from "../Data/Models/ThuongHieu.model";
import { ChiTietSP } from "../Data/Models/ChiTietSP.model";
import { DonNhap } from "../Data/Models/DonNhap.model";

export class SanPhamDto {
	id: number = 0;
	mota: string | null = "";
	tenSP: string | null = "";
	anhSP: string | null = "";
	uuDai: any = 0;
	loaiSP: LoaiSP | null = null;
	loaiSP: LoaiSPDto | null = null;
	idLoaiSP: number | null = null;
	thuongHieu: ThuongHieu | null = null;
	idThuongHieu: number | null = null;
	chiTietSP: ChiTietDto[] | null = [];
	chiTietSP: ChiTietSP[] | null = [];
	dsDonNhap: DonNhap[] | null = [];
	thuongHieu: ThuongHieuDto | null = null;
}