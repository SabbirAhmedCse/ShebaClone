using API.Services;
using Domain.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Repository.Context;
using Repository.Repository;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _user;
        private readonly TokenService _userToken;
        public UserController(IUserRepository user, TokenService userToken)
        {
            _user = user;
            _userToken = userToken;
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
                var allUsers = _user.GetAll(type);
                if (allUsers == null)
                {
                    return NotFound();
                }
                else if (allUsers != null)
                {
                    return Ok(allUsers);
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
        
        [AllowAnonymous]
        [HttpPost]
        [Route("signin")]
        public ActionResult<UserAuthDetails> SignIn(UserAuth userCardinalitis)
        {
            try
            {
                if(userCardinalitis != null)
                {
                    var userDetails = _user.GetByEmail(userCardinalitis.Email);
                    var authData = _userToken.CreateToken(userDetails);
                    if (authData == null)
                    {
                        return Unauthorized();
                    }

                    return Ok(authData);
                }

                return NotFound("Enter User Data");
                 
            }
            catch(Exception ex)
            {
                throw ex;
            }
            
        }

    }
}
