using Domain.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Repository.Context;
using Repository.Repository;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _user;
        private readonly AppDbContext _appDbContext;
        public UserController(IUserRepository user, AppDbContext appDbContext)
        {
            _user = user;
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public ActionResult<User> Get(long Id)
        {
            try
            {
                var obj = _user.Get(Id);
                if (obj == null)
                {
                    return NotFound();
                }
                else if (obj != null)
                {
                    return Ok(obj);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpGet("{*type}")]
        public ActionResult<User> GetAllUserByType(string type)
        {
            try
            {
                var obj = _user.GetAll(type);
                if (obj == null)
                {
                    return NotFound();
                }
                else if (obj != null)
                {
                    return Ok(obj);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpPost]
        public ActionResult<User> SignIn(User user)
        {
            try
            {
                var result = _user.SignIn(user);
                return Ok(result);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

    }
}
