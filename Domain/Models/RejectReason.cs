using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class RejectReason
    {
        [Key]
        public long Id  {get; set;}
        public long ServiceRequestId { get; set;}
        public string? Reason { get; set;}
        public long CreateBy { get; set;}
        public DateTime? CreateAt { get; set;}
        public long? UpdateBy { get; set;}
        public DateTime? UpdateAt { get; set;}
        public bool IsActive { get; set;}
        public bool IsDelete { get; set;}
    }
}
