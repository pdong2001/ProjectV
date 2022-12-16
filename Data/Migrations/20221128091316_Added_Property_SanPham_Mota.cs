using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Added_Property_SanPham_Mota : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Mota",
                table: "SanPham",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 11, 28, 16, 13, 15, 816, DateTimeKind.Local).AddTicks(2733), "$2a$11$3CvhM91fmRA0YKsj1xomWeKGlwmIEvdMfTG4bNQcmcxbdJDGq3WS2" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Mota",
                table: "SanPham");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 11, 28, 15, 27, 23, 82, DateTimeKind.Local).AddTicks(9970), "$2a$11$UB4Ubda7jTfLA5Pms.ofruDq6F.zTn/GdJZE9Qe66KuNWXwGWvsve" });
        }
    }
}
