using Data.Models;
using Services.Contracts.SanPhams;
using Services.Contracts.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.DonNhaps
{
    public class DonNhapDto
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int Gia { get; set; }
        public string MauSac { get; set; }
        public double KichThuoc { get; set; }
        /// <summary>
        /// Đơn vị đo kích thước
        /// </summary>
        public string Ten { get; set; }
        public string DonVi { get; set; }
        public int SoLuong { get; set; }
        public string DVT { get; set; }
        public string? MoTa { get; set; }
        public string? AnhCT { get; set; }
        /// <summary>
        /// Thông số kỹ thuật
        /// </summary>
        public string TSKT { get; set; }

        public int IdSanPham { get; set; }
        public SanPhamDto SanPham { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
