using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.SanPhams
{
    public class CreateUpdateSanPhamDto
    {
        public string TenSP { get; set; }
        public string AnhSP { get; set; }
        public double UuDai { get; set; }
        public int? IdLoaiSP { get; set; }
        public int? IdThuongHieu { get; set; }
        public string? Mota { get;set; }
    }
}
