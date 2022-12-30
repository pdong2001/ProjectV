import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MainComponent } from '../main/main.component';
import { ComponentsModule } from '../Shared/components/components.module';
import { PipesModule } from '../Shared/pipes/pipes.module';
import { DsLoaiSPComponent } from './ds-loai-sp/ds-loai-sp.component';
import { DSKhachHangComponent } from './dskhach-hang/dskhach-hang.component';
import { DSSanPhamComponent } from './dssan-pham/dssan-pham.component';
import { DSThuongHieuComponent } from './dsthuong-hieu/dsthuong-hieu.component';
import { ImagesComponent } from './images/images.component';
import { ImportListComponent } from './import-list/import-list.component';
import { MainRoutingModule } from './main-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { ThongKeDoanhSoComponent } from './thong-ke-doanh-so/thong-ke-doanh-so.component';
import { SettingListComponent } from './setting-list/setting-list.component';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    MainComponent,
    DsLoaiSPComponent,
    DSSanPhamComponent,
    DSKhachHangComponent,
    DSThuongHieuComponent,
    ImportListComponent,
    OrderListComponent,
    ThongKeDoanhSoComponent,
    ImagesComponent,
    SettingListComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule,
    TableModule,
    ToolbarModule,
    InputTextModule,
    DialogModule,
    SplitButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputNumberModule,
    ToggleButtonModule,
    ImageModule,
    PipesModule,
    TabViewModule,
    BadgeModule,
    DataViewModule,
    CardModule,
    TagModule
  ],
})
export class MainModule {}
