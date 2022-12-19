
export class DonNhapLookUpDto {
	pageSize: number = 0;
	pageIndex: number = 0;
	sort: string | null = "";
	search: string | null = "";
	columns: string | null = "";
	minDate: Date | null = null;
	maxDate: Date | null = null;
}