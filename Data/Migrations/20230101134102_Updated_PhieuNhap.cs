using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Updated_PhieuNhap : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MauSac",
                table: "DonNhap");

            migrationBuilder.RenameColumn(
                name: "TSKT",
                table: "DonNhap",
                newName: "Ten");

            migrationBuilder.AddColumn<string>(
                name: "Ten",
                table: "ChiTietSP",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2023, 1, 1, 20, 41, 1, 949, DateTimeKind.Local).AddTicks(9996), "$2a$11$ADuxN8cheQOGkohlHxiM0O6HLkc7qkHXLz8znWzMQdB/VyAaNENDq" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ten",
                table: "ChiTietSP");

            migrationBuilder.RenameColumn(
                name: "Ten",
                table: "DonNhap",
                newName: "TSKT");

            migrationBuilder.AddColumn<string>(
                name: "MauSac",
                table: "DonNhap",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2023, 1, 1, 19, 37, 16, 820, DateTimeKind.Local).AddTicks(6467), "$2a$11$MI4DQOwYeyvc7WD3TaeXmeip2KBzRB3IWqeetM9qdeUCMJBoAwiJS" });
        }
    }
}
