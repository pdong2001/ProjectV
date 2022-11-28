using Data.Models;
using Services.Contracts.SanPhams;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface ISanPhamService : IPagedCRUDService<int, SanPham, SanPhamDto, CreateUpdateSanPhamDto, SanPhamLookUpDto>
    {
    }
}
