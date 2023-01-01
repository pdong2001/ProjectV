using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class rename_Slide_Settings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Slide",
                table: "Slide");

            migrationBuilder.RenameTable(
                name: "Slide",
                newName: "Settings");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Settings",
                table: "Settings",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 31, 22, 37, 55, 168, DateTimeKind.Local).AddTicks(7536), "$2a$11$fBuOBckCXDIbVKxQreaTxe6.UV5rw0J6V9tUIeDi/B7UMKcE07n86" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Settings",
                table: "Settings");

            migrationBuilder.RenameTable(
                name: "Settings",
                newName: "Slide");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Slide",
                table: "Slide",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 31, 16, 10, 2, 246, DateTimeKind.Local).AddTicks(5666), "$2a$11$1jIbh6xcgigOeR7Tycs9SOimtQq9LTk5MNDxqN261R.Ggyejj9z1S" });
        }
    }
}
