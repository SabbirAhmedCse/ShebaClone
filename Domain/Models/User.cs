using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class User
    {
        [Key]
        public long Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; } 
        public string Email { get; set; } 
        public string Password { get; set; } 
        public string MobileNumber { get; set; } 
        public string Gender { get; set; } 
        public DateTime DateOfBirth { get; set; } 
        public string? City { get; set; } 
        public string? Area { get; set; } 
        public string? Address { get; set; }
        public int? Expert { get; set; }
        public bool IsAvailable { get; set; } = true;
        public DateTime CreateAt { get; set; }
        public DateTime? UpdateAt { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }

    }
}
