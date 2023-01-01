using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class ChiTietSP : Entity<int>
    {
        public string Ten { get; set; }
        public string? Code { get; set; }
        public int Gia { get; set; }
        public double UuDai { get; set; }
        public double KichThuoc { get; set; }
        /// <summary>
        /// Đơn vị đo kích thước
        /// </summary>
        public string DonVi { get; set; }
        public int SoLuong { get; set; }
        public string DVT { get; set; }
        public string? MoTa { get; set; }
        public string? AnhCT { get; set; }
        /// <summary>
        /// Thông số kỹ thuật
        /// </summary>

        [ForeignKey(nameof(SanPham))]
        public int IdSanPham { get; set; }

        public SanPham SanPham { get; set; }

    }
}
