using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.Settings
{
    public class SettingDto : Setting
    {
        public new IEnumerable<string> DSAnh { get; set; }
    }
}
