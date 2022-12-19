using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Added_Entity_DonNhap : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "HoaDonBan",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "HoaDonBan",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "HoaDonBan",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "HoaDonBan",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "HoaDonBan",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "HoaDonBan",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "HoaDonBan",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DonNhap",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gia = table.Column<int>(type: "int", nullable: false),
                    MauSac = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KichThuoc = table.Column<double>(type: "float", nullable: false),
                    DonVi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SoLuong = table.Column<int>(type: "int", nullable: false),
                    DVT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MoTa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnhCT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TSKT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdSanPham = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedBy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedBy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonNhap", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DonNhap_SanPham_IdSanPham",
                        column: x => x.IdSanPham,
                        principalTable: "SanPham",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 16, 9, 29, 45, 569, DateTimeKind.Local).AddTicks(4212), "$2a$11$/3fNzVTeUBfzpSVnRfcgSu588GBStFt42cHBNs03CzMi7iSyfYjaS" });

            migrationBuilder.CreateIndex(
                name: "IX_DonNhap_IdSanPham",
                table: "DonNhap",
                column: "IdSanPham");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DonNhap");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "HoaDonBan");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "HoaDonBan");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "HoaDonBan");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "HoaDonBan");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "HoaDonBan");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "HoaDonBan");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "HoaDonBan");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 16, 8, 40, 17, 877, DateTimeKind.Local).AddTicks(265), "$2a$11$uUg62eYh6Ih7xO5qwpjUQevlLngHfJYjhtDqqc51/mQawtuJPknaa" });
        }
    }
}
