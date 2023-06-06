using Domain.Models;
using Domain.Models.Actions;
using Domain.Models.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IServiceRequestRepository
    {
        public IEnumerable<ServiceRequestDetails> GetAll(int pageNumber,int PageSize);
        public string Create(RejectReason entity);
        public ServiceRequest Get(long Id);
        public string Update(ServiceRequest entity);
    }
}
