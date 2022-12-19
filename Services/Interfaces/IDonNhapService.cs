using Data.Models;
using Services.Contracts.DonNhaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IDonNhapService : IPagedCRUDService<int, DonNhap, DonNhapDto, CreateDonNhapDto, DonNhapLookUpDto>
    {
    }
}
