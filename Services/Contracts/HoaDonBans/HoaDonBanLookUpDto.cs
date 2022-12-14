using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utils.Enums;

namespace Services.Contracts.HoaDonBans
{
    public class HoaDonBanLookUpDto : Contracts.PageLookUpDto
    {
        public int? IdKhachHang { get; set; }
        public OrderStatus? Status { get; set; }
        public DateTime? Start { get; set; }
        public DateTime? End { get; set; }
    }
}
