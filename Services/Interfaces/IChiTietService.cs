using Data.Models;
using Services.Contracts;
using Services.Contracts.ChiTietSPs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IChiTietService : IPagedCRUDService<int, ChiTietSP, ChiTietDto, CreateUpdateChiTietDto, ChiTietSPLookUpDto>
    {
    }
}
