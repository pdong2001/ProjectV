using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class UpdatedKhachHang : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "email",
                table: "KhachHang",
                newName: "Email");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "KhachHang",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "DiaChi",
                table: "KhachHang",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "Huyen",
                table: "KhachHang",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PassWord",
                table: "KhachHang",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tinh",
                table: "KhachHang",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Xa",
                table: "KhachHang",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 28, 16, 17, 44, 302, DateTimeKind.Local).AddTicks(9684), "$2a$11$cSlC.qOIpz35/9E3VwJUGu5ZYCXMdpat/1xL5PI62p77kqG7.JNhq" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Huyen",
                table: "KhachHang");

            migrationBuilder.DropColumn(
                name: "PassWord",
                table: "KhachHang");

            migrationBuilder.DropColumn(
                name: "Tinh",
                table: "KhachHang");

            migrationBuilder.DropColumn(
                name: "Xa",
                table: "KhachHang");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "KhachHang",
                newName: "email");

            migrationBuilder.AlterColumn<string>(
                name: "email",
                table: "KhachHang",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DiaChi",
                table: "KhachHang",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 28, 14, 53, 3, 616, DateTimeKind.Local).AddTicks(2510), "$2a$11$0J7WpD4cfr2Gjbox.7eToO61TqIQbkfG/L2cTTxGd4AIlHe.d/SNe" });
        }
    }
}
