using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IServiceRepository
    {
        public IEnumerable<Service> GetAll();
        public string Insert(User entity);
        public User Get(long Id);
        public string Update(User entity);
        public string Delete(int Id);
    }
}
