import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";
import { KhachHangDto } from "../KhachHangs/KhachHangDto.model";

export class HoaDonBanDto {
	id: number = 0;
	soLuong: number = 0;
	sanPhamId: number = 0;
	idKhachHang: number = 0;
	donGia: any = 0;
	sanPham: ChiTietDto | null = null;
	khachHang: KhachHangDto | null = null;
}
