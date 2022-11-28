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
        public KhachHangsController(IKhachHangService service) : base(service)
        {
        }
    }
}
