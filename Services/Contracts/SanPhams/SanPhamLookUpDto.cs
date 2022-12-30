using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.SanPhams
{
    public class SanPhamLookUpDto : PageLookUpDto
    {
        public int? IdThuongHieu { get; set; }

        public int? IdLoaiSP { get; set; }

        public bool HasDetailOnly { get; set; }

        public bool ChiDangGiamGia { get; set; }
    }
}
