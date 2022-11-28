using AutoMapper;
using Data.Models;
using Data.Repositories;
using Services.Contracts;
using Services.Contracts.ChiTietSPs;
using Services.Contracts.SanPhams;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implements
{
    public class ChiTietSPService : PagedCRUDService<int, ChiTietSP, ChiTietDto, CreateUpdateChiTietDto, ChiTietSPLookUpDto>, IChiTietService
    {
        public ChiTietSPService(IRepository<int, ChiTietSP> repos, IMapper mapper) : base(repos, mapper)
        {
        }
    }
}
