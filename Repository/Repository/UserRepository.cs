using Domain.Interfaces;
using Domain.Models;
using Repository.Context;


namespace Repository.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _appDbContext;
        public UserRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public bool Create(User userDetails)
        {
            try
            {
                userDetails.CreateAt = DateTime.Now;
                _appDbContext.Users.Add(userDetails);
                return _appDbContext.SaveChanges() > 0;
            }
            catch(Exception ex)
            {
                throw ex;
            }
            
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

        public bool Update(User userDetails)
        {
            try
            {
                if (userDetails == null)
                {
                    return false;
                }
                _appDbContext.Users.Update(userDetails);
                return _appDbContext.SaveChanges() > 0;
            }
            catch(Exception ex) {
                throw ex;
            }
        }

        public bool Delete(long Id)
        {
            throw new NotImplementedException();
        }

    }
}
