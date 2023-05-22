using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class ServiceCategory
    {
        public long Id { get; set; }
        public string CategoryName { get; set; }
        public long CreateBy { get; set; }
        public DateTime? CreateAt { get; set; }
        public long UpdateBy { get; set; }
        public DateTime? UpdateAt { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }

    }
}
