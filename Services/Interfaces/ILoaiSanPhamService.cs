using Data.Models;
using Services.Contracts;
using Services.Contracts.LoaiSPs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface ILoaiSanPhamService : IPagedCRUDService<int, LoaiSP, LoaiSPDto, CreateUpdateLoaiSPDto, PageLookUpDto>
    {
    }
}
