using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models.Actions
{
    public class AcceptService
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long? UpdateBy { get; set; }
    }
}
