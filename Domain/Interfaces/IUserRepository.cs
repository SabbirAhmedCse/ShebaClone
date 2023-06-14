using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IUserRepository
    {
        public IEnumerable<User> GetAll(string type);
        public IEnumerable<User> GetAll(string type, int id);
        public bool Create(User entity);
        public User GetByEmail(string email);
        public User Get(long Id);
        public bool Update(User entity);
        public bool Delete(long Id);

        
    }
}
