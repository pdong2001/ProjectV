using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Added_DanBan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DaBan",
                table: "ChiTietSP",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2023, 1, 2, 16, 11, 39, 346, DateTimeKind.Local).AddTicks(7097), "$2a$11$WWWrgMlO8ZF4zbRl5u3bjOdzfAc89vq5/A/leQhYPqSPaC85z2ila" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DaBan",
                table: "ChiTietSP");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2023, 1, 1, 20, 41, 1, 949, DateTimeKind.Local).AddTicks(9996), "$2a$11$ADuxN8cheQOGkohlHxiM0O6HLkc7qkHXLz8znWzMQdB/VyAaNENDq" });
        }
    }
}
