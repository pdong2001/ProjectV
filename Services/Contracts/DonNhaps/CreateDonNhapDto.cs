using Data.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.DonNhaps
{
    public class CreateDonNhapDto
    {
        public string Ten { get; set; }
        public string Code { get; set; }
        public int Gia { get; set; }
        public double KichThuoc { get; set; }
        /// <summary>
        /// Đơn vị đo kích thước
        /// </summary>
        public string DonVi { get; set; }
        public int SoLuong { get; set; }
        public string DVT { get; set; }
        public string? MoTa { get; set; }
        public string? AnhCT { get; set; }
        [IgnoreDataMember, JsonIgnore]
        public int IdChiTietSP { get; set; }
        public int IdSanPham { get; set; }
    }
}
