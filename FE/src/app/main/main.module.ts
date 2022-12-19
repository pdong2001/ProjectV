import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
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
import { MainRoutingModule } from './main-routing.module';
import { ImportListComponent } from './import-list/import-list.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    MainComponent,
    DsLoaiSPComponent,
    DSSanPhamComponent,
    DSKhachHangComponent,
    DSThuongHieuComponent,
    ImportListComponent,
    OrderListComponent,
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
    CalendarModule,
    InputNumberModule,
    ToggleButtonModule,
    ImageModule,
    PipesModule,
    TabViewModule,
    BadgeModule,
  ],
})
export class MainModule {}
