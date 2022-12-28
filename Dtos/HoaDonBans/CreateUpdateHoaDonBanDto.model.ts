import { CreateUpdateCTDonBanDto } from "../HoaDonBans/CreateUpdateCTDonBanDto.model";

export class CreateUpdateHoaDonBanDto {
	idKhachHang: number = 0;
	xa: string | null = "";
	tinh: string | null = "";
	huyen: string | null = "";
	diaChi: string | null = "";
	chiTiet: CreateUpdateCTDonBanDto[] | null = [];
}