using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class DonNhap : FullAuditedEntity<int>
    {
        public string Ten { get; set; }
        public string Code { get; set; }
        public int Gia { get; set; }
        public double KichThuoc { get; set; }
        /// <summary>
        /// Đơn vị đo kích thước
        /// </summary>
        public string DonVi { get; set; }
        public int SoLuong { get; set; }
        public string DVT { get; set; }
        public string? MoTa { get; set; }
        public string? AnhCT { get; set; }

        [ForeignKey(nameof(SanPham))]
        public int IdSanPham { get; set; }
        public SanPham SanPham { get; set; }

        [ForeignKey(nameof(ChiTietSP))]
        public int IdChiTietSP { get; set; }
        public ChiTietSP ChiTietSP { get; set; }

    }
}
