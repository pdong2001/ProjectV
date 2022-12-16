using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts.ChiTietSPs;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChiTietSPsController : PagedCRUDBaseController<int, ChiTietSP, ChiTietDto, CreateUpdateChiTietDto, ChiTietSPLookUpDto>
    {
        public ChiTietSPsController(IChiTietService service) : base(service)
        {
        }
    }
}
