using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;
using Services.Contracts.HoaDonBans;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoaDonBansController : PagedCRUDBaseController<int, HoaDonBan, HoaDonBanDto, CreateUpdateHoaDonBanDto, HoaDonBanLookUpDto>
    {
        private readonly IHoaDonBanService service;

        public HoaDonBansController(IHoaDonBanService service) : base(service)
        {
            this.service = service;
        }

        [NonAction]
        public override Task<IActionResult> UpdateAsync([FromRoute] int id, [FromBody] CreateUpdateHoaDonBanDto request)
        {
            return base.UpdateAsync(id, request);
        }

        [HttpPost("doanh-so")]
        public async Task<IActionResult> DoanhSo(DoanhSoRequestDto request)
        {
            return Ok(await service.ThongKeDoanhSo(request));
        }
    }
}
