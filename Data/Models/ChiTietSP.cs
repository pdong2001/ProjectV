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
        public string Code { get; set; }
        public int Gia { get; set; }
        public string MauSac { get; set; }
        public double KichThuoc { get; set; }
        /// <summary>
        /// Đơn vị đo kích thước
        /// </summary>
        public string DonVi { get; set; }
        public string SoLuong { get; set; }
        public string MoTa { get; set; }
        public string AnhCT { get; set; }
        /// <summary>
        /// Thông số kỹ thuật
        /// </summary>
        public string TSKT { get; set; }

        [ForeignKey(nameof(SanPham))]
        public int IdSanPham { get; set; }

    }
}
