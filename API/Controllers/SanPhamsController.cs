using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts.SanPhams;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SanPhamsController : PagedCRUDBaseController<int, SanPham, SanPhamDto, CreateUpdateSanPhamDto, SanPhamLookUpDto>
    {
        public SanPhamsController(ISanPhamService service) : base(service)
        {
        }
    }
}
