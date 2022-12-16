import { KhachHangDto } from "../KhachHangs/KhachHangDto.model";
import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";
import { KhachHang } from "../Data/Models/KhachHang.model";
import { ChiTietSP } from "../Data/Models/ChiTietSP.model";

export class HoaDonBanDto {
	id: number = 0;
	soLuong: number = 0;
	sanPhamId: number = 0;
	idKhachHang: number = 0;
	donGia: any = 0;
	sanPham: ChiTietSP | null = null;
	khachHang: KhachHang | null = null;
	sanPham: ChiTietDto | null = null;
	khachHang: KhachHangDto | null = null;
}