using AutoMapper;
using Data.Models;
using Data.Repositories;
using Services.Contracts;
using Services.Contracts.LoaiSPs;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implements
{
    public class LoaiSanPhamService : PagedCRUDService<int, LoaiSP, LoaiSPDto, CreateUpdateLoaiSPDto, PageLookUpDto>, ILoaiSanPhamService
    {
        public LoaiSanPhamService(IRepository<int, LoaiSP> repos, IMapper mapper) : base(repos, mapper)
        {
        }
    }
}
