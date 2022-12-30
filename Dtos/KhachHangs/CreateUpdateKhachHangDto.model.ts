
export class CreateUpdateKhachHangDto {
	xa: string | null = "";
	sdt: string | null = "";
	tinh: string | null = "";
	hoTen: string | null = "";
	huyen: string | null = "";
	email: string | null = "";
	diaChi: string | null = "";
	passWord: string | null = "";
	ngaySinh!: Date;
}