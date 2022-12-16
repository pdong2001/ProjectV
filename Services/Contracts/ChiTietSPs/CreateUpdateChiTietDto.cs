using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.ChiTietSPs
{
    public class CreateUpdateChiTietDto
    {
        public string Code { get; set; }
        public int Gia { get; set; }
        public string MauSac { get; set; }
        public double KichThuoc { get; set; }
        /// <summary>
        /// Đơn vị đo kích thước
        /// </summary>
        public string DonVi { get; set; }
        public int SoLuong { get; set; }
        public string DVT { get; set; }
        public string? MoTa { get; set; }
        public string AnhCT { get; set; }
        /// <summary>
        /// Thông số kỹ thuật
        /// </summary>
        public string TSKT { get; set; }
        public int IdSanPham { get; set; }
    }
}
