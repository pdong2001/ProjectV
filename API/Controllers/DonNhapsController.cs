using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts.DonNhaps;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonNhapsController : PagedCRUDBaseController<int, DonNhap, DonNhapDto, CreateDonNhapDto, DonNhapLookUpDto>
    {
        public DonNhapsController(IDonNhapService service) : base(service)
        {
        }

        [NonAction]
        public override Task<IActionResult> UpdateAsync([FromRoute] int id, [FromBody] CreateDonNhapDto request)
        {
            return base.UpdateAsync(id, request);
        }

        [NonAction]
        public override Task<IActionResult> DeleteManyAsync([FromBody] IEnumerable<int> keys)
        {
            return base.DeleteManyAsync(keys);
        }
    }
}
