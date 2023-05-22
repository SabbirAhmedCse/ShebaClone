using Domain.Interfaces;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _appDbContext;
        public UserRepository(AppDbContext appDbContext)
        {
            this._appDbContext = appDbContext;
        }

        public string  Insert(User entity)
        {
            return "";
        }
        public User SignIn(User entity)
        {
            try
            {
                var signInResult = _appDbContext.Users.Where(e=> e.Email == entity.Email && e.Password == entity.Password).FirstOrDefault();
                if(signInResult != null)
                {
                    return signInResult;
                }
                else
                {
                    return null;
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<User> GetAll(string type)
        {
            var users = _appDbContext.Users.ToList().Where(e=> e.Type == type);
            return users;
            
        }
        public User Get(long Id)
        {
            try
            {
                var userDtails = _appDbContext.Users.Find(Id);
                if(userDtails == null)
                {
                    return null;
                }
                else
                {
                    return userDtails;
                }

            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public string Update(User entity)
        {
            throw new NotImplementedException();
        }

        public string  Delete(long Id)
        {
            throw new NotImplementedException();
        }

    }
}
