using AutoMapper;
using Data.Models;
using Data.Repositories;
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
        public KhachHangService(IRepository<int, KhachHang> repos, IMapper mapper) : base(repos, mapper)
        {
        }
    }
}
