using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models.Actions
{
    public class RejectService
    {
        public long Id { get; set; }
        public string? Reason { get; set; }
    }
}
