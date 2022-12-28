using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.HoaDonBans
{
    public class DoanhSoRequestDto
    {
        public DateTime? Start { get; set; }
        public DateTime? End { get; set; }
    }
}
