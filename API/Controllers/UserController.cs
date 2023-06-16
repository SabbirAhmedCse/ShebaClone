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
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;

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

        [AllowAnonymous]
        [HttpPost]
        [Route("signup")]
        public ActionResult<UserAuthDetails> SignUp (User userDetails)
        {
            try
            {
                var user = _user.GetByEmail(userDetails.Email);
                if (user == null)
                {
                    var result = _user.Create(userDetails);
                    if (result == true)
                    {
                        var userSigninDetails = _user.GetByEmail(userDetails.Email);
                        if (userSigninDetails != null)
                        {
                            if (userDetails.Email == userSigninDetails.Email && userDetails.Password == userSigninDetails.Password)
                            {
                                var authData = _userToken.CreateToken(userDetails);
                                if (authData != null)
                                {
                                    authData.massage = "signUp successfully!";
                                    return Ok(authData);
                                }
                                return Unauthorized();
                            }
                            return BadRequest("Miss match email or password!");
                        }
                        return NotFound("Email is not found.");
                    }
                    return BadRequest();
                }
                return Ok("Email allready exist!");
            }
            catch(Exception ex)
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
                var userDetails = _user.GetByEmail(userCardinalitis.Email);
                if(userDetails != null)
                {
                    if (userCardinalitis.Email == userDetails.Email && userCardinalitis.Password == userDetails.Password)
                    {
                        var authData = _userToken.CreateToken(userDetails);
                        if (authData != null)
                        {
                            authData.massage = "Signin Successfully!";
                            return Ok(authData);
                        }
                        return Unauthorized();
                    }
                    return BadRequest("Miss match email or password!");

                }
                return NotFound("Email is not found.");
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        [HttpGet]
        public ActionResult<User> GetUser(long id)
        {
            try
            {
                var userDetails = _user.Get(id);
                if (userDetails == null)
                {
                    return NotFound();
                }
                else if (userDetails != null)
                {
                    return Ok(userDetails);
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
        
        [HttpGet]
        [Route("userType")]
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

        [HttpPut("{id}")]
        public IActionResult UpdateUser(long id, User user)
        {
            try
            {
                if(user != null)
                {
                    var user_details = _user.Get(id);

                    if(user_details == null)
                    {
                        return BadRequest("No User with this Id");
                    }
                    user_details.Email = user.Email;
                    user_details.Password = user.Password;
                    user_details.Name = user.Name;
                    user_details.MobileNumber = user.MobileNumber;
                    user_details.Gender = user.Gender;
                    user_details.DateOfBirth = user.DateOfBirth;
                    user_details.Address = user.Address;
                    user_details.Area = user.Area;
                    user_details.City = user.City;

                    var result = _user.Update(user_details);

                    if (result)
                    {
                        return Ok(user);
                    }
                    else
                    {
                        return BadRequest();
                    }
                    
                }
                return BadRequest("User came with Empty body");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
