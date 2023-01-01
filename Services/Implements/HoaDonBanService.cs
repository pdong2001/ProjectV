using AutoMapper;
using Data;
using Data.Models;
using Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Services.Contracts;
using Services.Contracts.HoaDonBans;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utils.Enums;
using Utils.Exceptions;

namespace Services.Implements
{
    public class HoaDonBanService : PagedCRUDService<int, HoaDonBan, HoaDonBanDto, CreateUpdateHoaDonBanDto, HoaDonBanLookUpDto>, IHoaDonBanService
    {
        private readonly IRepository<int, HoaDonBan> repos;
        private readonly DataContext _context;
        private readonly IRepository<int, ChiTietSP> _ctSP;
        private readonly IRepository<int, CTDonBan> _ctDonBan;


        public HoaDonBanService(IRepository<int, HoaDonBan> repos, IMapper mapper, DataContext context, IRepository<int, ChiTietSP> ctSP, IRepository<int, CTDonBan> ctDonBan) : base(repos, mapper)
        {
            this.repos = repos;
            _context = context;
            _ctSP = ctSP;
            _ctDonBan = ctDonBan;
        }

        public override async Task<ServiceResponse> UpdateAsync(int id, CreateUpdateHoaDonBanDto input)
        {
            var entity = await repos.GetAsync(id);
            if (entity == null) throw new UserFriendlyException();
            if (entity.Status >= OrderStatus.DangGiao) throw new UserFriendlyException();
            _mapper.Map(input, entity);
            if (entity.ChiTiet != null && entity.ChiTiet.Count > 0) await AddCTAsync(input.ChiTiet);
            await _context.SaveChangesAsync();
            return ServiceResponse.CreateSuccess();
        }

        public async Task<ServiceResponse> UpdateStatusAsync(int id, OrderStatus status)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();
            var entity = await repos.GetAsync(id);
            if (entity == null) throw new UserFriendlyException("Đơn hàng không còn trên hệ thống");
            if (entity.Status is (OrderStatus.ChoXacNhan or OrderStatus.TuChoi) &&
                entity.Status is (OrderStatus.HoanThanh or OrderStatus.ChapNhan or OrderStatus.DangGiao))
            {
                var sanPham = await _ctDonBan.GetQueryable().Where(e => e.HoaDonId == id)
                    .Select(e => new { e.SoLuong, e.SanPham })
                    .ToListAsync();
                sanPham.ForEach(s =>
                {
                    s.SanPham.SoLuong -= s.SoLuong;
                });
                if (sanPham.Any(s => s.SoLuong < 0))
                {
                    throw new UserFriendlyException("Số lượng sản phẩm trong kho không đủ");
                }
                _context.ChiTietSP.AttachRange(sanPham.Select(s => s.SanPham));
            }
            else if (entity.Status is (OrderStatus.ChapNhan or OrderStatus.DangGiao) && status is OrderStatus.Huy)
            {
                var sanPham = await _ctDonBan.GetQueryable().Where(e => e.HoaDonId == id)
                    .Select(e => new { e.SoLuong, e.SanPham })
                    .ToListAsync();
                sanPham.ForEach(s =>
                {
                    s.SanPham.SoLuong += s.SoLuong;
                });
                _context.ChiTietSP.AttachRange(sanPham.Select(s => s.SanPham));
            }
            await _context.SaveChangesAsync();
            entity.Status = status;
            var result = await repos.UpdateAsync(entity);
            if (result == null)
            {
                await transaction.RollbackAsync();
                return ServiceResponse.CreateFailed();
            }
            await transaction.CommitAsync();
            return ServiceResponse.CreateSuccess();
        }

        public async Task<ServiceResponse> RequestCancelAsync(int id)
        {
            var entity = await repos.GetAsync(id);
            if (entity == null) throw new UserFriendlyException("Đơn hàng không còn trên hệ thống");
            if (entity.Status == OrderStatus.Huy)
            {
                throw new UserFriendlyException("Đơn hàng đã hủy trước đó");
            }
            if (entity.Status == OrderStatus.DangGiao)
            {
                throw new UserFriendlyException("Đơn hàng đang vận chuyển, không thể hủy");
            }
            if (entity.Status == OrderStatus.HoanThanh)
            {
                throw new UserFriendlyException("Đơn hàng đã hoàn thành");
            }
            entity.YeuCauHuy = true;
            var result = await repos.UpdateAsync(entity);
            if (result == null) return ServiceResponse.CreateFailed();
            return ServiceResponse.CreateSuccess();
        }

        public override async Task<ServiceResponse<int>> CreateAsync(CreateUpdateHoaDonBanDto input)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();
            if (input.ChiTiet.Count == 0) throw new UserFriendlyException("Vui lòng nhập chi tiết");
            var kh = _context.KhachHang.AsNoTracking().FirstOrDefault(k => k.Id == input.IdKhachHang);
            if (kh == null) throw new UserFriendlyException("Khách hàng không tồn tại");
            if (string.IsNullOrEmpty(input.Tinh))
            {
                input.Tinh = kh.Tinh;
                input.Huyen = kh.Huyen;
                input.Xa = kh.Xa;
                input.DiaChi = kh.DiaChi;
            }
            var ct = input.ChiTiet;
            input.ChiTiet = new List<CreateUpdateCTDonBanDto>();
            var response = await base.CreateAsync(input);
            if (response.Success && ct.Any())
            {
                ct.ForEach(ct => ct.HoaDonId = response.Data);
                if (await AddCTAsync(ct) == 0)
                {
                    await transaction.RollbackAsync();
                    throw new UserFriendlyException("Lưu chi tiết thất bại");
                }
                else
                {

                }
            }
            await transaction.CommitAsync();
            return response;
        }

        protected async Task<int> AddCTAsync(IEnumerable<CreateUpdateCTDonBanDto> input)
        {
            return await _ctDonBan.AddRangeAsync(input.Select(i => _mapper.Map<CreateUpdateCTDonBanDto, CTDonBan>(i)));
        }

        public async Task<ServiceResponse<IEnumerable<DoanhSoDto>>> ThongKeDoanhSo(DoanhSoRequestDto request)
        {
            if (request.Start.HasValue) request.Start = request.Start.Value.ToLocalTime();
            if (request.End.HasValue) request.End = request.End.Value.ToLocalTime();
            var response = new ServiceResponse<IEnumerable<DoanhSoDto>>();
            var query = _ctDonBan.GetQueryable();
            var thongKeQuery = query
                .Where(e => !request.Start.HasValue || e.HoaDon.CreatedAt >= request.Start.Value)
                .Where(e => !request.End.HasValue || e.HoaDon.CreatedAt <= request.End.Value)
                .Select(e => new { e.SoLuong, e.DonGia, e.HoaDon.CreatedAt });
            var queryResult = await thongKeQuery.ToListAsync();
            if (queryResult.Count > 0)
            {
                var min = queryResult.Min(e => e.CreatedAt).Date;
                var max = queryResult.Max(e => e.CreatedAt).Date;
                if (request.Start.HasValue)
                    min = min <= request.Start.Value ? min : request.Start.Value;
                if (request.End.HasValue)
                    max = max >= request.End.Value ? max : request.End.Value;
                var result = new List<DoanhSoDto>();
                while (min <= max)
                {
                    var dto = new DoanhSoDto();
                    dto.Date = min;
                    dto.SoLuong = queryResult.Where(e => e.CreatedAt.Date == min).Sum(e => e.SoLuong);
                    dto.Tong = queryResult.Where(e => e.CreatedAt.Date == min).Sum(e => e.SoLuong * e.DonGia);
                    result.Add(dto);
                    min = min.AddDays(1);
                }
                response.SetValue(result);
            }
            return response;

        }

        protected override IQueryable<HoaDonBan> BeforeSearch(IQueryable<HoaDonBan> query, HoaDonBanLookUpDto request)
        {
            if (request.End.HasValue)
            {
                request.End = request.End.Value.AddDays(1).Date;
            }
            query = query
                .Include(e => e.ChiTiet)
                .ThenInclude(c => c.SanPham.SanPham)
                .Include(e => e.KhachHang)
                .Where(e => !request.IdKhachHang.HasValue || request.IdKhachHang.Value == e.IdKhachHang)
                .Where(e => !request.Start.HasValue || request.Start.Value <= e.CreatedAt)
                .Where(e => !request.End.HasValue || request.End.Value >= e.CreatedAt)
                .Where(e => e.ChiTiet.Any());

            if (request.Status.HasValue)
            {
                query = query.Where(e => e.Status == request.Status);
            }

            return base.BeforeSearch(query, request);
        }
    }
}
