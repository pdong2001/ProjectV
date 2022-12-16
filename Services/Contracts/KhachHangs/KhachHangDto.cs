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
        public string HoTen { get; set; }
        public DateTime NgaySinh { get; set; }
        public string DiaChi { get; set; }
        public string SDT { get; set; }
        public string email { get; set; }
        public new ICollection<HoaDonBanDto> DSHoaDon { get; set; }
    }
}
