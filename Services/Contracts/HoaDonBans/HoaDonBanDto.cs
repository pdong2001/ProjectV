using Data.Models;
using Services.Contracts.ChiTietSPs;
using Services.Contracts.KhachHangs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.HoaDonBans
{
    public class HoaDonBanDto : HoaDonBan
    {
        public new KhachHangDto KhachHang { get; set; }
        public new ChiTietDto SanPham { get; set; }
    }
}
