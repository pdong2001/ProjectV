using Data.Models;
using Data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Services.Implements;
using Services.Interfaces;

namespace API
{
    public static class ConfigureServices
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IRepository<,>), typeof(Repository<,>));
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IChiTietService, ChiTietSPService>();
            services.AddScoped<IHoaDonBanService, HoaDonBanService>();
            services.AddScoped<IKhachHangService, KhachHangService>();
            services.AddScoped<ILoaiSanPhamService, LoaiSanPhamService>();
            services.AddScoped<ISanPhamService, SanPhamService>();
            services.AddScoped<ISlideService, SlideService>();
            services.AddScoped<IThuongHieuService, ThuongHieuService>();           
        }

        public static void AddAutoMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(c =>
            {
                c.AddProfile<AutoMapperProfile>();
            });
        }
    }
}
