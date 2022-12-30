import { OrderStatus } from "../Enums/OrderStatus.enum";

export class HoaDonBanLookUpDto {
	pageSize: number = 0;
	pageIndex: number = 0;
	sort: string | null = "";
	search: string | null = "";
	columns: string | null = "";
	end: Date | null = null;
	start: Date | null = null;
	status: OrderStatus | null = null;
	idKhachHang: number | null = null;
}