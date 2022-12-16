using Data.Models;
using Services.Contracts.SanPhams;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.LoaiSPs
{
    public class LoaiSPDto : LoaiSP
    {
        public new ICollection<SanPhamDto>? DSSanPham { get; set; }
    }
}
