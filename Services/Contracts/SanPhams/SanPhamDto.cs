using Data.Models;
using Services.Contracts.ChiTietSPs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.SanPhams
{
    public class SanPhamDto : SanPham
    {
        public ICollection<ChiTietDto> ChiTietSP { get; set; }
    }
}
