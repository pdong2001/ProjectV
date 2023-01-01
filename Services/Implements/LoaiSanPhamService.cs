using AutoMapper;
using Data.Models;
using Data.Repositories;
using Microsoft.EntityFrameworkCore;
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

        public override IQueryable<LoaiSP> BeforeGet(int id, IQueryable<LoaiSP> query)
        {
            query = query
                .Include(e => e.DSSanPham)
                .ThenInclude(e => e.ChiTietSP)
                .Include(e => e.DSSanPham)
                .ThenInclude(e => e.ThuongHieu);
            return base.BeforeGet(id, query);
        }

        protected override IQueryable<LoaiSP> BeforeSearch(IQueryable<LoaiSP> query, PageLookUpDto request)
        {
            query = query
                .Include(e => e.DSSanPham)
                .ThenInclude(e => e.ChiTietSP)
                .Include(e => e.DSSanPham)
                .ThenInclude(e => e.ThuongHieu);
            return base.BeforeSearch(query, request);
        }
    }
}
