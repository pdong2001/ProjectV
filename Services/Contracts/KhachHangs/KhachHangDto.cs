using Data.Models;
using Services.Contracts.HoaDonBans;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.KhachHangs
{
    public class KhachHangDto : KhachHang
    {
        public new ICollection<HoaDonBanDto> DSHoaDon { get; set; }
    }
}
