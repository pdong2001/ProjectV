using AutoMapper;
using Data.Models;
using Services.Contracts.ChiTietSPs;
using Services.Contracts.DonNhaps;
using Services.Contracts.HoaDonBans;
using Services.Contracts.KhachHangs;
using Services.Contracts.LoaiSPs;
using Services.Contracts.SanPhams;
using Services.Contracts.Slides;
using Services.Contracts.ThuongHieus;
using Services.Contracts.Users;

namespace API
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>(MemberList.None)
            .ForMember(u => u.Roles, o => o.MapFrom(s => string.IsNullOrEmpty(s.Roles) ? null : s.Roles.Split(',', StringSplitOptions.TrimEntries)));

            CreateMap<CreateUpdateUserDto, User>(MemberList.None)
                .ForMember(u => u.Roles, o => o.MapFrom(s => s.Roles == null ? null : String.Join(',', s.Roles)));

            CreateMap<LoaiSP, LoaiSPDto>();
            CreateMap<CreateUpdateLoaiSPDto, LoaiSP>();
            CreateMap<ChiTietSP, ChiTietDto>();
            CreateMap<CreateUpdateChiTietDto, ChiTietSP>();
            CreateMap<HoaDonBan, HoaDonBanDto>();
            CreateMap<CreateUpdateHoaDonBanDto, HoaDonBan>();
            CreateMap<KhachHang, KhachHangDto>();
            CreateMap<CreateUpdateKhachHangDto, KhachHang>();
            CreateMap<SanPham, SanPhamDto>();
            CreateMap<CreateUpdateSanPhamDto, SanPham>();
            CreateMap<Setting, SettingDto>()
                .ForMember(s => s.DSAnh, o =>
                {
                    o.Condition(s => !string.IsNullOrWhiteSpace(s.DSAnh));
                    o.MapFrom(s => s.DSAnh.Split(';', StringSplitOptions.RemoveEmptyEntries));
                });

            CreateMap<CreateUpdateSettingDto, Setting>()
                .ForMember(s => s.DSAnh, o =>
                {
                    o.Condition(s => s.DSAnh != null && s.DSAnh.Count > 0);
                    o.MapFrom(s => string.Join(";", s.DSAnh));
                });
            CreateMap<ThuongHieu, ThuongHieuDto>();
            CreateMap<CreateUpdateThuongHieuDto, ThuongHieu>();
            CreateMap<CreateDonNhapDto, DonNhap>();
            CreateMap<DonNhap, DonNhapDto>();
            CreateMap<CreateUpdateCTDonBanDto, CTDonBan>();
            CreateMap<CTDonBan, CTDonBanDto>();

        }
    }
}
