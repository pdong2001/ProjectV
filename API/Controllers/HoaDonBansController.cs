using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;
using Services.Contracts.HoaDonBans;
using Services.Interfaces;
using Utils.Enums;

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

        [HttpPost("search")]
        public override Task<IActionResult> SearchAsync([FromBody] HoaDonBanLookUpDto request)
        {
            return base.SearchAsync(request);
        }

        [HttpPut("status/{id}")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] OrderStatus status)
        {
            return Ok(await service.UpdateStatusAsync(id, status));
        }

        [HttpPost("cancel/{id}")]
        public async Task<IActionResult> RequestCancel(int id)
        {
            return Ok(await service.RequestCancelAsync(id));
        }

        [HttpPost("doanh-so")]
        public async Task<IActionResult> DoanhSo(DoanhSoRequestDto request)
        {
            return Ok(await service.ThongKeDoanhSo(request));
        }
    }
}
