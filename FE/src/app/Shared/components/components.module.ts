import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LoaiSPComponent } from './loai-sp/loai-sp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { EditorModule } from 'primeng/editor';
import { ChiTietSPComponent } from './chi-tiet-sp/chi-tiet-sp.component';
import { KhachHangComponent } from './khach-hang/khach-hang.component';
import { ThuongHieuComponent } from './thuong-hieu/thuong-hieu.component';
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
  ],
  exports: [
    LayoutComponent,
    LoaiSPComponent,
    SanphamComponent,
    ChiTietSPComponent,
    ThuongHieuComponent
  ],
})
export class ComponentsModule {}
