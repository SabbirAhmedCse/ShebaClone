using API.Models;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Domain.Interfaces
{
    public interface IServiceRepository
    {
        public Task<List<Service>> GetAll();
        public Task<Service> Insert(Service entity);
        public Task<Service> Get(int Id);
        public Task<Service> Update(Service entity);
        public Task<Service> Delete(int Id);
    }
}
