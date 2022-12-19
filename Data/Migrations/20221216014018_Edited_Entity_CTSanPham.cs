using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Edited_Entity_CTSanPham : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChiTietSP_SanPham_SanPhamId",
                table: "ChiTietSP");

            migrationBuilder.DropIndex(
                name: "IX_ChiTietSP_SanPhamId",
                table: "ChiTietSP");

            migrationBuilder.DropColumn(
                name: "SanPhamId",
                table: "ChiTietSP");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 16, 8, 40, 17, 877, DateTimeKind.Local).AddTicks(265), "$2a$11$uUg62eYh6Ih7xO5qwpjUQevlLngHfJYjhtDqqc51/mQawtuJPknaa" });

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietSP_IdSanPham",
                table: "ChiTietSP",
                column: "IdSanPham");

            migrationBuilder.AddForeignKey(
                name: "FK_ChiTietSP_SanPham_IdSanPham",
                table: "ChiTietSP",
                column: "IdSanPham",
                principalTable: "SanPham",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChiTietSP_SanPham_IdSanPham",
                table: "ChiTietSP");

            migrationBuilder.DropIndex(
                name: "IX_ChiTietSP_IdSanPham",
                table: "ChiTietSP");

            migrationBuilder.AddColumn<int>(
                name: "SanPhamId",
                table: "ChiTietSP",
                type: "int",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 7, 7, 30, 0, 254, DateTimeKind.Local).AddTicks(911), "$2a$11$5pznNo75yg5Msi882ZdTN.65IwWZys9V//epx2weJ35znlTFS.Gme" });

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietSP_SanPhamId",
                table: "ChiTietSP",
                column: "SanPhamId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChiTietSP_SanPham_SanPhamId",
                table: "ChiTietSP",
                column: "SanPhamId",
                principalTable: "SanPham",
                principalColumn: "Id");
        }
    }
}
