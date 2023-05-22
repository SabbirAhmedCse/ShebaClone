using Domain.Interfaces;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class ServiceRepository : IServiceRepository
    {
        public string Delete(int Id)
        {
            throw new NotImplementedException();
        }

        public User Get(long Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Service> GetAll()
        {
            throw new NotImplementedException();
        }

        public string Insert(User entity)
        {
            throw new NotImplementedException();
        }

        public string Update(User entity)
        {
            throw new NotImplementedException();
        }
    }
}
