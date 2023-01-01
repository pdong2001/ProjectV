
namespace Data.Models
{
    public class LoaiSP : Entity<int>
    {
        public string TenLSP { get; set; }

        public string Anh { get; set; }

        public ICollection<SanPham> DSSanPham { get; set; }
    }
}
