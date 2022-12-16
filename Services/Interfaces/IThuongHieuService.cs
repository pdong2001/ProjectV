using Data.Models;
using Services.Contracts;
using Services.Contracts.ThuongHieus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IThuongHieuService : IPagedCRUDService<int, ThuongHieu, ThuongHieuDto, CreateUpdateThuongHieuDto, PageLookUpDto>
    {
    }
}
