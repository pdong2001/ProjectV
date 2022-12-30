import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Roles } from '../Shared/constants/constants.module';
import { RouteMaps } from '../Shared/constants/routes.constant';
import { AuthGuard } from '../Shared/guards/auth.guard';
import { DsLoaiSPComponent } from './ds-loai-sp/ds-loai-sp.component';
import { DSKhachHangComponent } from './dskhach-hang/dskhach-hang.component';
import { DSSanPhamComponent } from './dssan-pham/dssan-pham.component';
import { DSThuongHieuComponent } from './dsthuong-hieu/dsthuong-hieu.component';
import { ImagesComponent } from './images/images.component';
import { ImportListComponent } from './import-list/import-list.component';
import { MainComponent } from './main.component';
import { OrderListComponent } from './order-list/order-list.component';
import { SettingListComponent } from './setting-list/setting-list.component';
import { ThongKeDoanhSoComponent } from './thong-ke-doanh-so/thong-ke-doanh-so.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: RouteMaps.categories,
        component: DsLoaiSPComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
      {
        path: RouteMaps.products,
        component: DSSanPhamComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
      {
        path: RouteMaps.customers,
        component: DSKhachHangComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
      {
        path: RouteMaps.brands,
        component: DSThuongHieuComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
      {
        path: RouteMaps.imports,
        component: ImportListComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
      {
        path: RouteMaps.orders,
        component: OrderListComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
      {
        path: RouteMaps.orderStatistic,
        component: ThongKeDoanhSoComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
      {
        path: RouteMaps.images,
        component: ImagesComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
      {
        path: RouteMaps.settings,
        component: SettingListComponent,
        data: {
          Roles: [Roles.Admin],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
