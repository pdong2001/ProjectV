using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;
using Services.Contracts.KhachHangs;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KhachHangsController : PagedCRUDBaseController<int, KhachHang, KhachHangDto, CreateUpdateKhachHangDto, PageLookUpDto>
    {
        private readonly IKhachHangService service;

        public KhachHangsController(IKhachHangService service) : base(service)
        {
            this.service = service;
        }

        [HttpPost("check")]
        public async Task<IActionResult> Search([FromBody] OneKhachHangLookUpDto request)
        {
            return Ok(await service.SearchAsync(request));
        }
    }
}
