using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;
using Services.Contracts.Settings;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingsController : PagedCRUDBaseController<int, Setting, SettingDto, CreateUpdateSettingDto, PageLookUpDto>
    {
        public SettingsController(ISlideService service) : base(service)
        {
        }
    }
}
