using AutoMapper;
using Data.Models;
using Data.Repositories;
using Services.Contracts;
using Services.Contracts.HoaDonBans;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implements
{
    public class HoaDonBanService : PagedCRUDService<int, HoaDonBan, HoaDonBanDto, CreateUpdateHoaDonBanDto, HoaDonBanLookUpDto>, IHoaDonBanService
    {
        public HoaDonBanService(IRepository<int, HoaDonBan> repos, IMapper mapper) : base(repos, mapper)
        {
        }

        public override Task<ServiceResponse> UpdateAsync(int id, CreateUpdateHoaDonBanDto input)
        {
            return base.UpdateAsync(id, input);
        }
    }
}
