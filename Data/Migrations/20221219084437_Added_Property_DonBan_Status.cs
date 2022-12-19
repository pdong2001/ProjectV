using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Added_Property_DonBan_Status : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "HoaDonBan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 19, 15, 44, 37, 188, DateTimeKind.Local).AddTicks(6811), "$2a$11$D87RdK/odYFHdwCi.5NiuefZ71GKDXPg/dyH72uw/93GwpsPzSX4W" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "HoaDonBan");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 19, 11, 50, 45, 223, DateTimeKind.Local).AddTicks(3612), "$2a$11$fzPNYwINDK9SQAUubxbuNu/Rz3e4DANUXmWBjTrms3KwoskRPlEX2" });
        }
    }
}
