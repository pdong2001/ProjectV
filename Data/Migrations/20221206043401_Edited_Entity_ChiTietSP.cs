using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Edited_Entity_ChiTietSP : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "SoLuong",
                table: "ChiTietSP",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "DVT",
                table: "ChiTietSP",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 6, 11, 34, 1, 375, DateTimeKind.Local).AddTicks(7738), "$2a$11$1a4XEKHOAuyQlOK/zowPNe6L7/HWtS8XtyADyH/VJj7Md5KFQvRmK" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DVT",
                table: "ChiTietSP");

            migrationBuilder.AlterColumn<string>(
                name: "SoLuong",
                table: "ChiTietSP",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 11, 28, 16, 13, 15, 816, DateTimeKind.Local).AddTicks(2733), "$2a$11$3CvhM91fmRA0YKsj1xomWeKGlwmIEvdMfTG4bNQcmcxbdJDGq3WS2" });
        }
    }
}
