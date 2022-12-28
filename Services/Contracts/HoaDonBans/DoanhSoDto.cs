using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.HoaDonBans
{
    public class DoanhSoDto
    {
        public DateTime Date { get; set; }
        public int SoLuong { get; set; }
        public long Tong { get; set; }
    }
}
