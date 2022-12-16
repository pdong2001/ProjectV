
export class HoaDonBanLookUpDto {
	pageSize: number = 0;
	pageIndex: number = 0;
	sort: string | null = "";
	search: string | null = "";
	columns: string | null = "";
	sanPhamId: number | null = null;
	idKhachHang: number | null = null;
}