using Data.Models;
using Services.Contracts;
using Services.Contracts.HoaDonBans;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IHoaDonBanService : IPagedCRUDService<int, HoaDonBan, HoaDonBanDto, CreateUpdateHoaDonBanDto, HoaDonBanLookUpDto>
    {
    }
}
