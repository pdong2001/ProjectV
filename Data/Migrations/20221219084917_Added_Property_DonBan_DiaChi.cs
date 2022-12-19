using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Added_Property_DonBan_DiaChi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DiaChi",
                table: "HoaDonBan",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 19, 15, 49, 17, 542, DateTimeKind.Local).AddTicks(7003), "$2a$11$OJ85qaVufNWcmf5H2742g.uZROYi46ELXN9paHNIVRz6FVK3aXT1." });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiaChi",
                table: "HoaDonBan");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 19, 15, 44, 37, 188, DateTimeKind.Local).AddTicks(6811), "$2a$11$D87RdK/odYFHdwCi.5NiuefZ71GKDXPg/dyH72uw/93GwpsPzSX4W" });
        }
    }
}
