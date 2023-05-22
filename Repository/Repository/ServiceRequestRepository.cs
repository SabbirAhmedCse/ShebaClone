using Domain.Interfaces;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class ServiceRequestRepository : IServiceRequestRepository
    {
        public string Delete(long Id)
        {
            throw new NotImplementedException();
        }

        public ServiceRequest Get(long Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ServiceRequest> GetAll(string entity)
        {
            throw new NotImplementedException();
        }

        public string Insert(ServiceRequest entity)
        {
            throw new NotImplementedException();
        }
    }
}
