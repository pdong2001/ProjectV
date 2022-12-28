using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class CTDonBan : Entity<int>
    {
        [ForeignKey(nameof(HoaDon))]
        public int HoaDonId { get; set; }
        public HoaDonBan HoaDon { get; set; }

        [ForeignKey(nameof(SanPham))]
        public int SanPhamId { get; set; }
        public ChiTietSP SanPham { get; set; }

        public int SoLuong { get; set; }

        public int DonGia { get; set; }
    }
}
