using Data.Models;
using Services.Contracts.ChiTietSPs;
using Services.Contracts.LoaiSPs;
using Services.Contracts.ThuongHieus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.SanPhams
{
    public class SanPhamDto : SanPham
    {
        public new LoaiSPDto? LoaiSP { get; set; }
        public new ThuongHieuDto? ThuongHieu { get; set; }
        public ICollection<ChiTietDto> ChiTietSP { get; set; }
    }
}
