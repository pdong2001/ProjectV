using AutoMapper;
using Data.Models;
using Data.Repositories;
using Microsoft.EntityFrameworkCore;
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



        protected override IQueryable<ChiTietSP> BeforeSearch(IQueryable<ChiTietSP> query, ChiTietSPLookUpDto request)
        {
            if (request.IdSanPham.HasValue)
            {
                query = query.Where(e => e.IdSanPham == request.IdSanPham.Value);
            }
            return base.BeforeSearch(query, request);
        }

        public override IQueryable<ChiTietSP> BeforeQuery(IQueryable<ChiTietSP> query)
        {
            query = query.AsNoTracking().Include(p => p.SanPham);
            return base.BeforeQuery(query);
        }

        public override IQueryable<ChiTietSP> BeforeGet(int id, IQueryable<ChiTietSP> query)
        {
            query = query.AsNoTracking().Include(p => p.SanPham);
            return base.BeforeGet(id, query);
        }
    }
}
