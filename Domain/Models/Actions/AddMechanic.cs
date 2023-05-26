using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models.Actions
{
    public class AddMechanic
    {
        public long Id { get; set; }
        public long MechanicId { get; set; }
        public long UpdateBy { get; set; }
    }
}
