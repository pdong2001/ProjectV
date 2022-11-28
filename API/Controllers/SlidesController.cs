using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;
using Services.Contracts.Slides;
using Services.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlidesController : PagedCRUDBaseController<int, Slide, SlideDto, CreateUpdateSlideDto, PageLookUpDto>
    {
        public SlidesController(ISlideService service) : base(service)
        {
        }
    }
}
