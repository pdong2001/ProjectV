using Data.Models;
using Services.Contracts.SanPhams;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.ChiTietSPs
{
    public class ChiTietDto : ChiTietSP
    {
        public new SanPhamDto? SanPham { get; set; }
    }
}
