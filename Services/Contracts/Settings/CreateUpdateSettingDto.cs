﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.Slides
{
    public class CreateUpdateSettingDto
    {
        public ICollection<string> DSAnh { get; set; }
        public int Type { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}