using Data.Models;

using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Models
{
    public class SanPham :  Entity<int>
    {
        public string TenSP { get; set; }
        public string AnhSP { get; set; }
        public double UuDai { get; set; }

        [ForeignKey(nameof(LoaiSP))]
        public int? IdLoaiSP { get; set; }
        public LoaiSP LoaiSP { get; set; }

        [ForeignKey(nameof(ThuongHieu))]
        public int? IdThuongHieu { get; set; }
        public ThuongHieu ThuongHieu { get; set; }

        public ICollection<ChiTietSP> ChiTietSP { get; set; }
    }
}
