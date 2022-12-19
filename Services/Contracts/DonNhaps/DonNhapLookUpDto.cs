using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts.DonNhaps
{
    public class DonNhapLookUpDto : PageLookUpDto
    {
        public DateTime? MinDate { get; set; }

        public DateTime? MaxDate { get; set; }
    }
}
