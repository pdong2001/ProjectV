using AutoMapper;
using Data.Models;
using Data.Repositories;
using Services.Contracts;
using Services.Contracts.Slides;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implements
{
    public class SlideService : PagedCRUDService<int, Setting, SettingDto, CreateUpdateSettingDto, PageLookUpDto>, ISlideService
    {
        public SlideService(IRepository<int, Setting> repos, IMapper mapper) : base(repos, mapper)
        {
        }
    }
}
