using Data.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.HoaDonBans
{
    public class CreateUpdateCTDonBanDto
    {
        public int HoaDonId { get; set; }

        public int SanPhamId { get; set; }

        public int SoLuong { get; set; }

        public int DonGia { get; set; }
    }
}
