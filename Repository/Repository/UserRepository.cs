using Domain.Interfaces;
using Domain.Models;
using Microsoft.IdentityModel.Tokens;
using Repository.Context;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Repository.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _appDbContext;
        public UserRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public string Insert(User entity)
        {
            return "";
        }
        public User GetByEmail(string email)
        {
            try
            {
                var userDetails = _appDbContext.Users.FirstOrDefault(e =>  e.Email == email);
                if (userDetails == null)
                {
                    return null;
                }
                else
                {
                    return userDetails;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<User> GetAll(string type)
        {
            var users = _appDbContext.Users.Where(e => e.Type == type).ToList();
            return users;
        }

        public IEnumerable<User> GetAll(string type, int serviceId)
        {
            var catagoryId = (from s in _appDbContext.Services
                          join sc in _appDbContext.ServiceCategories on s.ServicesCategoryId equals sc.Id
                          where s.Id == serviceId
                          select sc.Id).SingleOrDefault();
            var users = _appDbContext.Users.Where(e => e.Type == type && e.Expert == catagoryId);
            return users;
        }

        public User Get(long Id)
        {
            try
            {
                var userDtails = _appDbContext.Users.Find(Id);
                if (userDtails == null)
                {
                    return null;
                }
                else
                {
                    return userDtails;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string Update(User entity)
        {
            throw new NotImplementedException();
        }

        public string Delete(long Id)
        {
            throw new NotImplementedException();
        }

    }
}
