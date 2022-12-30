import { HoaDonBanDto } from "../HoaDonBans/HoaDonBanDto.model";
import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";
import { HoaDonBan } from "../Data/Models/HoaDonBan.model";
import { ChiTietSP } from "../Data/Models/ChiTietSP.model";

export class CTDonBanDto {
	id: number = 0;
	donGia: number = 0;
	soLuong: number = 0;
	hoaDonId: number = 0;
	sanPhamId: number = 0;
	hoaDon: HoaDonBan | null = null;
	sanPham: ChiTietSP | null = null;
	sanPham: ChiTietDto | null = null;
	hoaDon: HoaDonBanDto | null = null;
}