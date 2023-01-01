using Data.Models;
using Services.Contracts;
using Services.Contracts.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface ISlideService : IPagedCRUDService<int, Setting, SettingDto, CreateUpdateSettingDto, PageLookUpDto>
    {
    }
}
