using AutoMapper;
using Data.Models;
using Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Services.Contracts;
using Services.Contracts.ThuongHieus;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implements
{
    public class ThuongHieuService : PagedCRUDService<int, ThuongHieu, ThuongHieuDto, CreateUpdateThuongHieuDto, PageLookUpDto>, IThuongHieuService
    {
        public ThuongHieuService(IRepository<int, ThuongHieu> repos, IMapper mapper) : base(repos, mapper)
        {
        }

        protected override IQueryable<ThuongHieu> BeforeSearch(IQueryable<ThuongHieu> query, PageLookUpDto request)
        {
            query = query
                .Include(e => e.DSSanPham)
                .ThenInclude(e => e.ChiTietSP)
                .Include(e => e.DSSanPham)
                .ThenInclude(e => e.LoaiSP);
            return base.BeforeSearch(query, request);
        }
    }
}
