import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Roles } from '../Shared/constants/constants.module';
import { RouteMaps } from '../Shared/constants/routes.constant';
import { AuthGuard } from '../Shared/guards/auth.guard';
import { DSChiTietSPComponent } from './ds-chi-tiet-sp/ds-chi-tiet-sp.component';
import { DsLoaiSPComponent } from './ds-loai-sp/ds-loai-sp.component';
import { DSKhachHangComponent } from './dskhach-hang/dskhach-hang.component';
import { DSSanPhamComponent } from './dssan-pham/dssan-pham.component';
import { DSThuongHieuComponent } from './dsthuong-hieu/dsthuong-hieu.component';
import { MainComponent } from './main.component';

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
        path: RouteMaps.productDetails,
        component: DSChiTietSPComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
