export enum SettingType {
  Slide = 0,
  Banner = 1,
  SaleIcons = 2,
  Phone = 3,
  Address = 4,
}
export namespace SettingType {
  export function getDisplayName(value: SettingType) {
    switch (value) {
      case SettingType.Slide:
        return 'Slide';
      case SettingType.Address:
        return 'Địa chỉ';
      case SettingType.Banner:
        return 'Banner';
      case SettingType.SaleIcons:
        return 'Icon khuyến mãi';
      case SettingType.Phone:
        return 'Số điện thoại';
      default:
        return '';
    }
  }

  export function getList() {
    return Object.keys(SettingType)
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
