
export class SanPhamLookUpDto {
	pageSize: number = 0;
	pageIndex: number = 0;
	sort: string | null = "";
	search: string | null = "";
	columns: string | null = "";
	hasDetailOnly: boolean = false;
	chiDangGiamGia: boolean = false;
	idLoaiSP: number | null = null;
	idThuongHieu: number | null = null;
}