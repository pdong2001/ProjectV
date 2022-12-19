export interface DonNhapLookUpDto {
  pageSize?: number;
  pageIndex?: number;
  sort?: string;
  search?: string;
  columns?: string;
  minDate?: Date;
  maxDate?: Date;
}
