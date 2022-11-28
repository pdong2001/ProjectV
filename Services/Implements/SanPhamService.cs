using AutoMapper;
using Data.Models;
using Data.Repositories;
using Services.Contracts.SanPhams;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implements
{
    public class SanPhamService : PagedCRUDService<int, SanPham, SanPhamDto, CreateUpdateSanPhamDto, SanPhamLookUpDto>, ISanPhamService
    {
        public SanPhamService(IRepository<int, SanPham> repos, IMapper mapper) : base(repos, mapper)
        {
        }

        protected override IQueryable<SanPham> BeforeSearch(IQueryable<SanPham> query, SanPhamLookUpDto request)
        {
            if (request.IdLoaiSP.HasValue)
            {
                query = query.Where(s => s.IdLoaiSP == request.IdLoaiSP.Value);
            }
            if (request.IdThuongHieu.HasValue)
            {
                query = query.Where(s => s.IdThuongHieu == request.IdThuongHieu.Value);
            }

            return base.BeforeSearch(query, request);
        }
    }
}
