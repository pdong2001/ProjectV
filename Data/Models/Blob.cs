using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Blob : Entity<Guid>
    {
        [MaxLength(200)]
        public string? Name { get;set; }
        [MaxLength(100)]
        public string ContentType { get; set; }
        public byte[] Content { get; set; }
        [MaxLength(100)]
        public string? Folder { get; set; }
        public string FileName { get; set; }
    }
}
