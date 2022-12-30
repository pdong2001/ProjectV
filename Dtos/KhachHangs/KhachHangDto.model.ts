import { HoaDonBanDto } from "../HoaDonBans/HoaDonBanDto.model";
import { HoaDonBan } from "../Data/Models/HoaDonBan.model";

export class KhachHangDto {
	id: number = 0;
	xa: string | null = "";
	sdt: string | null = "";
	tinh: string | null = "";
	hoTen: string | null = "";
	huyen: string | null = "";
	email: string | null = "";
	diaChi: string | null = "";
	passWord: string | null = "";
	ngaySinh!: Date;
	dsHoaDon: HoaDonBanDto[] | null = [];
	dsHoaDon: HoaDonBan[] | null = [];
}