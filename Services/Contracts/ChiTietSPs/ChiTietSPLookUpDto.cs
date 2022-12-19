using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.ChiTietSPs
{
    public class ChiTietSPLookUpDto : PageLookUpDto
    {
        public int? IdSanPham { get; set; }
    }
}
