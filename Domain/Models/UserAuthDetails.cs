using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class UserAuthDetails
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string Type { get; set; }    
        public string Token { get; set; }
        public string massage { get; set; }

    }
}
