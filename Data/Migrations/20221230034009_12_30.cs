using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class _12_30 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UuDai",
                table: "SanPham");

            migrationBuilder.RenameColumn(
                name: "TenAnh",
                table: "Slide",
                newName: "Title");

            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Slide",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Slide",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Slide",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DSAnh",
                table: "Slide",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Slide",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Slide",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "Slide",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "UuDai",
                table: "ChiTietSP",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 30, 10, 40, 8, 588, DateTimeKind.Local).AddTicks(9113), "$2a$11$FrTN4fN/krcPnSfvM0CTBOa9KzFHiO7E4sULI3BfM/yhGZAjb9Zae" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Content",
                table: "Slide");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Slide");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Slide");

            migrationBuilder.DropColumn(
                name: "DSAnh",
                table: "Slide");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Slide");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Slide");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "Slide");

            migrationBuilder.DropColumn(
                name: "UuDai",
                table: "ChiTietSP");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Slide",
                newName: "TenAnh");

            migrationBuilder.AddColumn<double>(
                name: "UuDai",
                table: "SanPham",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 28, 16, 17, 44, 302, DateTimeKind.Local).AddTicks(9684), "$2a$11$cSlC.qOIpz35/9E3VwJUGu5ZYCXMdpat/1xL5PI62p77kqG7.JNhq" });
        }
    }
}
