using Data.Models;
using Services.Contracts.ChiTietSPs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.HoaDonBans
{
    public class CTDonBanDto : CTDonBan
    {
        public new HoaDonBanDto HoaDon { get; set; }
        public new ChiTietDto SanPham { get; set; }
    }
}
