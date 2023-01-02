using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.ChiTietSPs
{
    public class CreateUpdateChiTietDto
    {
        public string Ten { get; set; }
        public string? Code { get; set; }
        public int Gia { get; set; }
        public double KichThuoc { get; set; }
        /// <summary>
        /// Đơn vị đo kích thước
        /// </summary>
        public string DonVi { get; set; }
        [DefaultValue(0)]
        public int SoLuong { get; set; }
        public string DVT { get; set; }
        public string? AnhCT { get; set; }
        public double UuDai { get; set; }
        /// <summary>
        /// Thông số kỹ thuật
        /// </summary>
        public int IdSanPham { get; set; }
    }
}
