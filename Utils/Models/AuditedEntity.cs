using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public abstract class AuditedEntity<TKey> : Entity<TKey>, IAuditedEntity
    {
        [MaxLength(50)]
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        [MaxLength(50)]
        public string? UpdatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public interface IAuditedEntity
    {
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

}
