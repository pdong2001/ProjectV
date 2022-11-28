using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class HoaDonBan : Entity<int>
    {
        public int SoLuong { get; set; }
        public double DonGia { get; set; }

        [ForeignKey(nameof(KhachHang))]
        public int IdKhachHang { get; set; }
        public KhachHang KhachHang { get; set; }
        
        public int SanPhamId { get; set; }
        public ChiTietSP SanPham { get; set; }
    }
}
