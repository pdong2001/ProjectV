using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;
using Services.Contracts.ThuongHieus;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThuongHieusController : PagedCRUDBaseController<int, ThuongHieu, ThuongHieuDto, CreateUpdateThuongHieuDto, PageLookUpDto>
    {
        public ThuongHieusController(IThuongHieuService service) : base(service)
        {
        }
    }
}
