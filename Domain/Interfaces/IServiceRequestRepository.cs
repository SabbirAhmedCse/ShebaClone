using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IServiceRequestRepository
    {
        public IEnumerable<ServiceRequest> GetAll(string entity);
        public string Insert(ServiceRequest entity);
        public ServiceRequest Get(long Id);
        public string Delete(long Id);
    }
}
