using Data.Models;
using Services.Contracts;
using Services.Contracts.KhachHangs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IKhachHangService : IPagedCRUDService<int, KhachHang, KhachHangDto, CreateUpdateKhachHangDto, PageLookUpDto>
    {
    }
}
