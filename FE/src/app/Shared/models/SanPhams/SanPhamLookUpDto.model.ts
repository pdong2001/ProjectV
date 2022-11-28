
export class SanPhamLookUpDto {
	pageSize: number = 0;
	pageIndex: number = 0;
	sort: string | null = "";
	search: string | null = "";
	columns: string | null = "";
	idLoaiSP: number | null = null;
	idThuongHieu: number | null = null;
}