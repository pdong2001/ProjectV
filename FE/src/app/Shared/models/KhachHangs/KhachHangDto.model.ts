import { HoaDonBan } from "../Data/Models/HoaDonBan.model";

export class KhachHangDto {
	id: number = 0;
	sdt: string | null = "";
	hoTen: string | null = "";
	email: string | null = "";
	diaChi: string | null = "";
	ngaySinh!: Date;
	dsHoaDon: HoaDonBan[] | null = [];
}