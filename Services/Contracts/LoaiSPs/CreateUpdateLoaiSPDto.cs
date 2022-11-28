using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.LoaiSPs
{
    public class CreateUpdateLoaiSPDto
    {
        public string TenLSP { get; set; }

        public string Anh { get; set; }
    }
}
