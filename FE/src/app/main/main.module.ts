import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MainComponent } from '../main/main.component';
import { ComponentsModule } from '../Shared/components/components.module';
import { MainRoutingModule } from './main-routing.module';
import { DsLoaiSPComponent } from './ds-loai-sp/ds-loai-sp.component';
import { DSSanPhamComponent } from './dssan-pham/dssan-pham.component';
import { ChiTietSPComponent } from './chi-tiet-sp/chi-tiet-sp.component';

@NgModule({
    declarations: [
        MainComponent,
        DsLoaiSPComponent,
        DSSanPhamComponent,
        ChiTietSPComponent,
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
    ]
})
export class MainModule {}
