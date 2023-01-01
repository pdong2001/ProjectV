using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Updated_Products : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MauSac",
                table: "ChiTietSP");

            migrationBuilder.DropColumn(
                name: "TSKT",
                table: "ChiTietSP");

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "ChiTietSP",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2023, 1, 1, 19, 37, 16, 820, DateTimeKind.Local).AddTicks(6467), "$2a$11$MI4DQOwYeyvc7WD3TaeXmeip2KBzRB3IWqeetM9qdeUCMJBoAwiJS" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MoTa",
                table: "SanPham");

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "ChiTietSP",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MauSac",
                table: "ChiTietSP",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TSKT",
                table: "ChiTietSP",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 31, 22, 37, 55, 168, DateTimeKind.Local).AddTicks(7536), "$2a$11$fBuOBckCXDIbVKxQreaTxe6.UV5rw0J6V9tUIeDi/B7UMKcE07n86" });
        }
    }
}
