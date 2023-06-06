using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models.Views
{
    public class ServiceRequestDetails
    {
        [Key]
        public long? Id { get; set; }
        public string? CustomerName { get; set; }
        public string? ServiceCategory { get; set; }
        public string? ServiceSubCategory { get; set; }
        public string? MechanicName { get; set; }
        public string? Description { get; set; }
        public string? ServiceStatus { get; set; }
        public string? MechanicStatus { get; set; }
        public DateTime? ServiceDate { get; set; }
        public string? Address { get; set; }
        
        
    }
}
