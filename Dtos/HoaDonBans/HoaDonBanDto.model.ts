import { KhachHangDto } from "../KhachHangs/KhachHangDto.model";
import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";
import { KhachHang } from "../Data/Models/KhachHang.model";
import { ChiTietSP } from "../Data/Models/ChiTietSP.model";
import { OrderStatus } from "../Enums/OrderStatus.enum";

export class HoaDonBanDto {
	id: number = 0;
	soLuong: number = 0;
	sanPhamId: number = 0;
	idKhachHang: number = 0;
	donGia: any = 0;
	diaChi: string | null = "";
	deletedBy: string | null = "";
	createdBy: string | null = "";
	updatedBy: string | null = "";
	isDeleted: boolean = false;
	createdAt!: Date;
	sanPham: ChiTietSP | null = null;
	khachHang: KhachHang | null = null;
	sanPham: ChiTietDto | null = null;
	deletedAt: Date | null = null;
	updatedAt: Date | null = null;
	status: OrderStatus = OrderStatus.ChoXacNhan;
	khachHang: KhachHangDto | null = null;
}