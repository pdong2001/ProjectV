using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utils.Enums;

namespace Data.Models
{
    public class HoaDonBan : FullAuditedEntity<int>
    {
        public int SoLuong { get; set; }
        public double DonGia { get; set; }

        [ForeignKey(nameof(KhachHang))]
        public int IdKhachHang { get; set; }
        public KhachHang KhachHang { get; set; }

        public string DiaChi { get; set; }

        public OrderStatus Status { get; set; }

        public bool YeuCauHuy { get; set; }

        public ICollection<CTDonBan> ChiTiet { get; set; }
    }
}
