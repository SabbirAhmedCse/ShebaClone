using Domain.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Services
{
    public class TokenService
    {
        private readonly IConfiguration _configuration;
        private readonly UserAuthDetails _userAuthDetails;
        public TokenService(IConfiguration configuration, UserAuthDetails userAuthDetails)
        {
            _configuration = configuration;
            _userAuthDetails = userAuthDetails;
        }
        public UserAuthDetails CreateToken(User userDetails)
        {
            try
            {
                if (userDetails == null)
                {
                    return null;
                }
                else
                {
                    var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim("Email", userDetails.Email),
                        new Claim("UserId", userDetails.Id.ToString()),
                        new Claim("UserType", userDetails.Type),
                    };


                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"],
                        claims,
                        expires: DateTime.UtcNow.AddDays(5),
                        signingCredentials: signIn);
                    var accessToken = new JwtSecurityTokenHandler().WriteToken(token);

                    _userAuthDetails.Token = accessToken;
                    _userAuthDetails.Id = userDetails.Id;
                    _userAuthDetails.Email = userDetails.Email;
                    _userAuthDetails.Type = userDetails.Type;

                    return _userAuthDetails;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

    }
}
