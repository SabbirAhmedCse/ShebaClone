using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class ServiceRequest
    {
        [Key]
        public long Id { get; set; }
        public int ServiceId { get; set; }
        public string? Description { get; set; }
        public string? ServiceStatus { get; set; }  
        public string? MechanicStatus { get; set; }
        public DateTime? ServiceDate { get; set; }
        public long? MechanicId { get; set; }
        public long CreateBy { get; set; }
        public DateTime CreateAt { get; set; }
        public long? UpdateBy { get; set; }
        public DateTime? UpdateAt { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
    }
}
