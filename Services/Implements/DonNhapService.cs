using AutoMapper;
using Data;
using Data.Models;
using Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Services.Contracts;
using Services.Contracts.DonNhaps;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utils.Exceptions;

namespace Services.Implements
{
    public class DonNhapService : PagedCRUDService<int, DonNhap, DonNhapDto, CreateDonNhapDto, DonNhapLookUpDto>, IDonNhapService
    {
        private readonly IRepository<int, DonNhap> repos;
        private readonly IRepository<int, SanPham> _sanPhams;
        private readonly IRepository<int, ChiTietSP> _chiTietSPs;
        private readonly DataContext _context;
        public DonNhapService(IRepository<int, DonNhap> repos, IMapper mapper, IRepository<int, SanPham> sanPhams, IRepository<int, ChiTietSP> hiTietSPs, DataContext context) : base(repos, mapper)
        {
            this.repos = repos;
            _sanPhams = sanPhams;
            _chiTietSPs = hiTietSPs;
            _context = context;
        }

        public override Task<ServiceResponse> UpdateAsync(int id, CreateDonNhapDto input)
        {
            throw new UserFriendlyException("Không thể sửa đơn nhập!");
        }

        protected override IQueryable<DonNhap> BeforeSearch(IQueryable<DonNhap> query, DonNhapLookUpDto request)
        {
            query = query.Include(e => e.SanPham);
            return base.BeforeSearch(query, request);
        }

        public override IQueryable<DonNhap> BeforeQuery(IQueryable<DonNhap> query)
        {
            query = query.Include(e => e.SanPham);
            return base.BeforeQuery(query);
        }

        public override IQueryable<DonNhap> BeforeGet(int id, IQueryable<DonNhap> query)
        {
            query = query.Include(e => e.SanPham);
            return base.BeforeGet(id, query);
        }

        public override async Task<ServiceResponse<int>> CreateAsync(CreateDonNhapDto input)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();

            var ctQuery = _chiTietSPs.GetQueryable();

            var productDetail = ctQuery.FirstOrDefault(p => input.DonVi == p.DonVi
                && input.IdSanPham == p.IdSanPham
                && input.TSKT == p.TSKT
                && input.Code == p.Code
                && input.MauSac == p.MauSac
                && input.KichThuoc == p.KichThuoc
            );

            if (productDetail != null)
            {
                productDetail.SoLuong += input.SoLuong;
                await _chiTietSPs.UpdateAsync(productDetail);
            }
            else
            {
                productDetail = await _chiTietSPs.AddAsync(new ChiTietSP
                {
                    SoLuong = input.SoLuong,
                    IdSanPham = input.IdSanPham,
                    MauSac = input.MauSac,
                    Code = input.Code,
                    KichThuoc = input.KichThuoc,
                    TSKT = input.TSKT,
                    DonVi = input.DonVi,
                    DVT = input.DVT,
                });
            }
            if (productDetail != null)
                input.IdChiTietSP = productDetail.Id;
            var response = await base.CreateAsync(input);

            if (response.Success)
            {
                await transaction.CommitAsync();
            }
            else
            {
                await transaction.RollbackAsync();
            }
            return response;
        }

        public override Task<ServiceResponse<int>> DeleteAsync(IEnumerable<int> keys)
        {
            throw new UserFriendlyException("Không thể xóa nhiều đơn nhập cùng lúc!");
        }
        public override async Task<ServiceResponse> DeleteAsync(int id)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();
            var input = await repos.GetAsync(id);
            var response = await base.DeleteAsync(id);
            var ctQuery = _chiTietSPs.GetQueryable();
            if (response.Success && input != null)
            {
                var productDetail = await _chiTietSPs.GetAsync(input.IdChiTietSP);
                if (productDetail != null)
                {
                    productDetail.SoLuong -= input.SoLuong;
                    await _chiTietSPs.UpdateAsync(productDetail);
                }
            }
            await transaction.CommitAsync();
            return response;
        }
    }
}
