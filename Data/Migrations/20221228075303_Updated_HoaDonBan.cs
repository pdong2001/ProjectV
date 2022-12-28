using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class Updated_HoaDonBan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HoaDonBan_ChiTietSP_SanPhamId",
                table: "HoaDonBan");

            migrationBuilder.DropIndex(
                name: "IX_HoaDonBan_SanPhamId",
                table: "HoaDonBan");

            migrationBuilder.DropColumn(
                name: "SanPhamId",
                table: "HoaDonBan");

            migrationBuilder.AddColumn<bool>(
                name: "YeuCauHuy",
                table: "HoaDonBan",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "CTDonBan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HoaDonId = table.Column<int>(type: "int", nullable: false),
                    SanPhamId = table.Column<int>(type: "int", nullable: false),
                    SoLuong = table.Column<int>(type: "int", nullable: false),
                    DonGia = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CTDonBan", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CTDonBan_ChiTietSP_SanPhamId",
                        column: x => x.SanPhamId,
                        principalTable: "ChiTietSP",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CTDonBan_HoaDonBan_HoaDonId",
                        column: x => x.HoaDonId,
                        principalTable: "HoaDonBan",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 28, 14, 53, 3, 616, DateTimeKind.Local).AddTicks(2510), "$2a$11$0J7WpD4cfr2Gjbox.7eToO61TqIQbkfG/L2cTTxGd4AIlHe.d/SNe" });

            migrationBuilder.CreateIndex(
                name: "IX_CTDonBan_HoaDonId",
                table: "CTDonBan",
                column: "HoaDonId");

            migrationBuilder.CreateIndex(
                name: "IX_CTDonBan_SanPhamId",
                table: "CTDonBan",
                column: "SanPhamId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CTDonBan");

            migrationBuilder.DropColumn(
                name: "YeuCauHuy",
                table: "HoaDonBan");

            migrationBuilder.AddColumn<int>(
                name: "SanPhamId",
                table: "HoaDonBan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("78f5610c-77be-45a7-be07-effb2bab65ff"),
                columns: new[] { "CreatedAt", "Password" },
                values: new object[] { new DateTime(2022, 12, 19, 15, 49, 17, 542, DateTimeKind.Local).AddTicks(7003), "$2a$11$OJ85qaVufNWcmf5H2742g.uZROYi46ELXN9paHNIVRz6FVK3aXT1." });

            migrationBuilder.CreateIndex(
                name: "IX_HoaDonBan_SanPhamId",
                table: "HoaDonBan",
                column: "SanPhamId");

            migrationBuilder.AddForeignKey(
                name: "FK_HoaDonBan_ChiTietSP_SanPhamId",
                table: "HoaDonBan",
                column: "SanPhamId",
                principalTable: "ChiTietSP",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
