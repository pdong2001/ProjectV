﻿
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Setting : AuditedEntity<int>
    {
        public string? DSAnh { get; set; }
        public int Type { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Keys { get; set; }
    }
}
