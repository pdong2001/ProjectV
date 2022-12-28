using Data.Models;
using Services.Contracts;
using Services.Contracts.HoaDonBans;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utils.Enums;

namespace Services.Interfaces
{
    public interface IHoaDonBanService : IPagedCRUDService<int, HoaDonBan, HoaDonBanDto, CreateUpdateHoaDonBanDto, HoaDonBanLookUpDto>
    {
        Task<ServiceResponse> RequestCancelAsync(int id);
        Task<ServiceResponse<IEnumerable<DoanhSoDto>>> ThongKeDoanhSo(DoanhSoRequestDto request);
        Task<ServiceResponse> UpdateStatusAsync(int id, OrderStatus status);
    }
}
