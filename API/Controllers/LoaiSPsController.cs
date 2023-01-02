using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;
using Services.Contracts.LoaiSPs;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoaiSPsController : PagedCRUDBaseController<int, LoaiSP, LoaiSPDto, CreateUpdateLoaiSPDto, LoaiSPLookUpDto>
    {
        public LoaiSPsController(ILoaiSanPhamService service) : base(service)
        {
        }
    }
}
