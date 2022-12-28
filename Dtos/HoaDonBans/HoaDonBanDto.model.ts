import { KhachHangDto } from "../KhachHangs/KhachHangDto.model";
import { ChiTietDto } from "../ChiTietSPs/ChiTietDto.model";
import { KhachHang } from "../Data/Models/KhachHang.model";
import { OrderStatus } from "../Enums/OrderStatus.enum";
import { CTDonBan } from "../Data/Models/CTDonBan.model";

export class HoaDonBanDto {
	id: number = 0;
	soLuong: number = 0;
	idKhachHang: number = 0;
	donGia: any = 0;
	diaChi: string | null = "";
	deletedBy: string | null = "";
	createdBy: string | null = "";
	updatedBy: string | null = "";
	yeuCauHuy: boolean = false;
	isDeleted: boolean = false;
	createdAt!: Date;
	khachHang: KhachHang | null = null;
	sanPham: ChiTietDto | null = null;
	deletedAt: Date | null = null;
	updatedAt: Date | null = null;
	status: OrderStatus = OrderStatus.ChoXacNhan;
	khachHang: KhachHangDto | null = null;
	chiTiet: CTDonBan[] | null = [];
}