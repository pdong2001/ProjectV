using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Added_Property_DonNhap_IdChiTietSP : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdChiTietSP",
                table: "DonNhap",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 19, 8, 4, 57, 981, DateTimeKind.Local).AddTicks(9235), "$2a$11$coZ9qGZCJFh1bNQCQ51neekY9voFS0b/VcdGf14qx/qYSXre4iURa" });

            migrationBuilder.CreateIndex(
                name: "IX_DonNhap_IdChiTietSP",
                table: "DonNhap",
                column: "IdChiTietSP");

            migrationBuilder.AddForeignKey(
                name: "FK_DonNhap_ChiTietSP_IdChiTietSP",
                table: "DonNhap",
                column: "IdChiTietSP",
                principalTable: "ChiTietSP",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DonNhap_ChiTietSP_IdChiTietSP",
                table: "DonNhap");

            migrationBuilder.DropIndex(
                name: "IX_DonNhap_IdChiTietSP",
                table: "DonNhap");

            migrationBuilder.DropColumn(
                name: "IdChiTietSP",
                table: "DonNhap");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 16, 9, 29, 45, 569, DateTimeKind.Local).AddTicks(4212), "$2a$11$/3fNzVTeUBfzpSVnRfcgSu588GBStFt42cHBNs03CzMi7iSyfYjaS" });
        }
    }
}
