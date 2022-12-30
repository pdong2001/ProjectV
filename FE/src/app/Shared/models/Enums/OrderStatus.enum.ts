export enum OrderStatus {
  ChoXacNhan = 0,
  ChapNhan = 1,
  TuChoi = 2,
  DangGiao = 3,
  Huy = 5,
  HoanThanh = 6,
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
      case OrderStatus.Huy:
        return 'Đã hủy';
      case OrderStatus.HoanThanh:
        return 'Hoàn thành';
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
