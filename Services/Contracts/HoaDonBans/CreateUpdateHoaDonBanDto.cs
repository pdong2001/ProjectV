using Data.Models;
using Services.Contracts.ChiTietSPs;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utils.Enums;

namespace Services.Contracts.HoaDonBans
{
    public class CreateUpdateHoaDonBanDto
    {
        public int IdKhachHang { get; set; }

        public string? Tinh { get; set; }

        public string? Huyen { get; set; }

        public string? Xa { get; set; }

        public string? DiaChi { get; set; }

        public List<CreateUpdateCTDonBanDto> ChiTiet { get; set; }
    }
}
