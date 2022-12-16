using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Added_Shop_Entites : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KhachHang",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HoTen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NgaySinh = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DiaChi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SDT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KhachHang", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LoaiSP",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenLSP = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Anh = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoaiSP", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Slide",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenAnh = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Slide", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ThuongHieu",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenTH = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Logo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThuongHieu", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SanPham",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenSP = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AnhSP = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UuDai = table.Column<double>(type: "float", nullable: false),
                    IdLoaiSP = table.Column<int>(type: "int", nullable: true),
                    IdThuongHieu = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SanPham", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SanPham_LoaiSP_IdLoaiSP",
                        column: x => x.IdLoaiSP,
                        principalTable: "LoaiSP",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_SanPham_ThuongHieu_IdThuongHieu",
                        column: x => x.IdThuongHieu,
                        principalTable: "ThuongHieu",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ChiTietSP",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gia = table.Column<int>(type: "int", nullable: false),
                    MauSac = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KichThuoc = table.Column<double>(type: "float", nullable: false),
                    DonVi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoLuong = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MoTa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AnhCT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TSKT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdSanPham = table.Column<int>(type: "int", nullable: false),
                    SanPhamId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietSP", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChiTietSP_SanPham_SanPhamId",
                        column: x => x.SanPhamId,
                        principalTable: "SanPham",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "HoaDonBan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SoLuong = table.Column<int>(type: "int", nullable: false),
                    DonGia = table.Column<double>(type: "float", nullable: false),
                    IdKhachHang = table.Column<int>(type: "int", nullable: false),
                    SanPhamId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HoaDonBan", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HoaDonBan_ChiTietSP_SanPhamId",
                        column: x => x.SanPhamId,
                        principalTable: "ChiTietSP",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HoaDonBan_KhachHang_IdKhachHang",
                        column: x => x.IdKhachHang,
                        principalTable: "KhachHang",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 11, 21, 15, 36, 48, 325, DateTimeKind.Local).AddTicks(2483), "$2a$11$CefVW00OI6/e.XUF/0VWYOiCMfswoS0ruBpvTknzHE3QxcF.Lb/hO" });

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietSP_SanPhamId",
                table: "ChiTietSP",
                column: "SanPhamId");

            migrationBuilder.CreateIndex(
                name: "IX_HoaDonBan_IdKhachHang",
                table: "HoaDonBan",
                column: "IdKhachHang");

            migrationBuilder.CreateIndex(
                name: "IX_HoaDonBan_SanPhamId",
                table: "HoaDonBan",
                column: "SanPhamId");

            migrationBuilder.CreateIndex(
                name: "IX_SanPham_IdLoaiSP",
                table: "SanPham",
                column: "IdLoaiSP");

            migrationBuilder.CreateIndex(
                name: "IX_SanPham_IdThuongHieu",
                table: "SanPham",
                column: "IdThuongHieu");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HoaDonBan");

            migrationBuilder.DropTable(
                name: "Slide");

            migrationBuilder.DropTable(
                name: "ChiTietSP");

            migrationBuilder.DropTable(
                name: "KhachHang");

            migrationBuilder.DropTable(
                name: "SanPham");

            migrationBuilder.DropTable(
                name: "LoaiSP");

            migrationBuilder.DropTable(
                name: "ThuongHieu");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 11, 21, 15, 7, 15, 480, DateTimeKind.Local).AddTicks(783), "$2a$11$1Yp0i/E8RJMlj/nSd7xDxeuplYnM2QMJ/J6Wh4FGm0xFiXRe/Q9cO" });
        }
    }
}
