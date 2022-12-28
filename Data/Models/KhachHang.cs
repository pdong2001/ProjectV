using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class KhachHang : Entity<int>
    {
        public string HoTen { get; set; }
        public DateTime NgaySinh { get; set; }
        public string? Tinh { get; set; }
        public string? Huyen { get; set; }
        public string? Xa { get; set; }
        public string? DiaChi { get; set; }
        public string SDT { get; set; }
        public string? Email { get; set; }
        public string? PassWord { get; set; }
        public ICollection<HoaDonBan> DSHoaDon { get; set; }
    }
}
