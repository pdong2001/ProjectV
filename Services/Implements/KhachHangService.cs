using AutoMapper;
using Data.Models;
using Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Services.Contracts;
using Services.Contracts.KhachHangs;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implements
{
    public class KhachHangService : PagedCRUDService<int, KhachHang, KhachHangDto, CreateUpdateKhachHangDto, PageLookUpDto>, IKhachHangService
    {
        private readonly IRepository<int, KhachHang> repos;

        public KhachHangService(IRepository<int, KhachHang> repos, IMapper mapper) : base(repos, mapper)
        {
            this.repos = repos;
        }

        public async Task<ServiceResponse<int>> SearchAsync(OneKhachHangLookUpDto input)
        {
            var result = await repos.GetQueryable().Where(k => k.HoTen == input.HoTen && k.SDT == input.SoDienThoai)
                .Select(k => k.Id)
                .FirstOrDefaultAsync();
            var response = new ServiceResponse<int>();
            if (result > 0)
            {
                response.SetValue(result);
            }
            else
            {
                response.SetFailed();
            }
            return response;
        }
    }
}
