using Data.Models;
using Services.Contracts.SanPhams;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.ThuongHieus
{
    public class ThuongHieuDto : ThuongHieu
    {
        public new ICollection<SanPhamDto> DSSanPham { get; set; }
    }
}
