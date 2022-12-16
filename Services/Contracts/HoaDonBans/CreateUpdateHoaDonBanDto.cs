using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.HoaDonBans
{
    public class CreateUpdateHoaDonBanDto
    {
        public int SoLuong { get; set; }
        public double DonGia { get; set; }
        public int IdKhachHang { get; set; }
        public int SanPhamId { get; set; }
    }
}
