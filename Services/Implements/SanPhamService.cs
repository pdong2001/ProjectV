using AutoMapper;
using Data.Models;
using Data.Repositories;
using Services.Contracts;
using Services.Contracts.SanPhams;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Services.Implements
{
    public class SanPhamService : PagedCRUDService<int, SanPham, SanPhamDto, CreateUpdateSanPhamDto, SanPhamLookUpDto>, ISanPhamService
    {
        public SanPhamService(IRepository<int, SanPham> repos, IMapper mapper) : base(repos, mapper)
        {
        }

        public override IQueryable<SanPham> BeforeQuery(IQueryable<SanPham> query)
        {
            query = query
                .Include(e => e.ChiTietSP)
                .Include(s => s.ThuongHieu)
                .Include(s => s.LoaiSP);
            return base.BeforeQuery(query);
        }

        public override IQueryable<SanPham> BeforeGet(int id, IQueryable<SanPham> query)
        {
            query = query
                .Include(s => s.ThuongHieu)
                .Include(s => s.LoaiSP);
            return base.BeforeGet(id, query);
        }
        protected override IQueryable<SanPham> BeforeSearch(IQueryable<SanPham> query, SanPhamLookUpDto request)
        {
            query = query
                .Include(s => s.ThuongHieu)
                .Include(s => s.LoaiSP)
                .Include(s => s.ChiTietSP);
            if (request.HasDetailOnly)
            {
                query = query.Where(s => s.ChiTietSP.Count > 0);
            }
            if (request.IdLoaiSP.HasValue)
            {
                query = query.Where(s => s.IdLoaiSP == request.IdLoaiSP.Value);
            }
            if (request.IdThuongHieu.HasValue)
            {
                query = query.Where(s => s.IdThuongHieu == request.IdThuongHieu.Value);
            }
            if (request.ChiDangGiamGia)
            {
                query = query.Where(s => s.ChiTietSP.Any(c => c.UuDai > 0));
            }
            return base.BeforeSearch(query, request);
        }
    }
}
