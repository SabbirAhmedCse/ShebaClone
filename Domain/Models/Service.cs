using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Service
    {
        public long Id { get; set; }
        public long ServicesCategoryId { get; set; }
        public string SubCategory { get; set; }
        public string? Description { get; set; }
        public long Price { get; set; }
        public DateTime Image { get; set; }
        public long CreateBy { get; set; }
        public DateTime? CreateAt { get; set; }
        public long UpdateBy { get; set; }
        public DateTime? UpdateAt { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
    }
}
