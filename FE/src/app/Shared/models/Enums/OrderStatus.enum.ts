export enum OrderStatus {
  ChoXacNhan = 0,
  ChapNhan = 1,
  TuChoi = 2,
  DangGiao = 3,
  YeuCauHuy = 4,
  Huy = 5,
}
export namespace OrderStatus {
  export function getDisplayName(value: OrderStatus) {
    switch (value) {
      case OrderStatus.ChoXacNhan:
        return 'Chờ xác nhận';
      case OrderStatus.ChapNhan:
        return 'Đã xác nhận';
      case OrderStatus.TuChoi:
        return 'Từ chối';
      case OrderStatus.DangGiao:
        return 'Đang giao';
      case OrderStatus.YeuCauHuy:
        return 'yêu cầu hủy';
      case OrderStatus.Huy:
        return 'Đã hủy';
      default:
        return '';
    }
  }

  export function getList() {
    return Object.keys(OrderStatus)
      .map((k) => Number(k))
      .filter((k) => !isNaN(k))
      .map((k) => {
        return {
          value: k,
          label: getDisplayName(k),
        };
      });
  }
}