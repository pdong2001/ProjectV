import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { ChiTietSPComponent } from './chi-tiet-sp/chi-tiet-sp.component';
import { DSChiTietSPComponent } from './ds-chi-tiet-sp/ds-chi-tiet-sp.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { KhachHangComponent } from './khach-hang/khach-hang.component';
import { LayoutComponent } from './layout/layout.component';
import { LoaiSPComponent } from './loai-sp/loai-sp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThuongHieuComponent } from './thuong-hieu/thuong-hieu.component';
import { UserComponent } from './user/user.component';
import { PipesModule } from '../pipes/pipes.module';
import { DialogModule } from 'primeng/dialog';
import { BadgeModule } from 'primeng/badge';
import { DonNhapComponent } from './don-nhap/don-nhap.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    PageNotFoundComponent,
    UserComponent,
    LoaiSPComponent,
    SanphamComponent,
    ChiTietSPComponent,
    KhachHangComponent,
    ThuongHieuComponent,
    DSChiTietSPComponent,
    DonNhapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    TableModule,
    ButtonModule,
    SplitButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    EditorModule,
    ImageModule,
    TabViewModule,
    ToggleButtonModule,
    CalendarModule,
    ToolbarModule,
    TooltipModule,
    TagModule,
    PipesModule,
    DialogModule,
    BadgeModule,
  ],
  exports: [
    LayoutComponent,
    LoaiSPComponent,
    SanphamComponent,
    ChiTietSPComponent,
    ThuongHieuComponent,
    DSChiTietSPComponent,
    DonNhapComponent,
    KhachHangComponent
  ],
})
export class ComponentsModule {}
