using Domain.Interfaces;
using Domain.Models;
using Domain.Models.Actions;
using Domain.Models.Views;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class ServiceRequestController : ControllerBase
    {
        private readonly IServiceRequestRepository _serviceRequest;
        private readonly IUserRepository _user;
        private readonly IServiceCategoryRepository _serviceCategory;
        private readonly IServiceRepository _service;
        private readonly RejectReason _rejectReason;
        private readonly ServiceRequestDetails _serviceRequestDetails;
        public ServiceRequestController(IServiceRequestRepository serviceRequest, IUserRepository user, IServiceCategoryRepository serviceCategory, IServiceRepository service, ServiceRequestDetails serviceRequestDetails, RejectReason rejectReason)
        {
            _serviceRequest = serviceRequest;
            _user = user;
            _serviceCategory = serviceCategory;
            _service = service;
            _serviceRequestDetails = serviceRequestDetails;
            _rejectReason = rejectReason;
        }

        [HttpGet]
        [Route("details")]
        public async Task<ActionResult<ServiceRequestDetails>> GetById(long Id)
        {
            try
            {
                var serviceRequest = _serviceRequest.Get(Id);
                var service = await _service.Get(serviceRequest.ServiceId);
                var serviceCategory = _serviceCategory.Get(service.ServicesCategoryId);
                var customer = _user.Get(serviceRequest.CreateBy);
                if(serviceRequest.MechanicId != null)
                {
                    var mechanic = _user.Get((long)serviceRequest.MechanicId);
                    _serviceRequestDetails.MechanicName = mechanic.Name;
                }

                _serviceRequestDetails.Id = Id;
                _serviceRequestDetails.CustomerName = customer.Name;
                _serviceRequestDetails.ServiceCategory = serviceCategory.CategoryName;
                _serviceRequestDetails.Description = serviceRequest.Description;
                _serviceRequestDetails.ServiceDate = serviceRequest.ServiceDate;
                _serviceRequestDetails.ServiceStatus = serviceRequest.ServiceStatus;
                _serviceRequestDetails.MechanicStatus = serviceRequest.MechanicStatus;
                _serviceRequestDetails.Address = customer.Address;
                return Ok(_serviceRequestDetails);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Route("getall")]
        public ActionResult<ServiceRequest> GetAllCustomerRequestedService(int pageNumber, int pageSize)
        {
            try
            {
                long userId = Convert.ToInt64((User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserId").Value);
                string type = (User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserType").Value;
                var serviceRequestedData = _serviceRequest.GetAll(pageNumber, pageSize,userId,type);
                if(serviceRequestedData != null)
                {
                    return Ok(serviceRequestedData);
                }
                return NotFound(serviceRequestedData);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Route("allocatedService")]
        public ActionResult<ServiceRequest> GetAllMechanicAllocatedService(int pageNumber, int pageSize)
        {
            try
            {
                long userId = Convert.ToInt64((User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserId").Value);
                string type = (User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserType").Value;

                var serviceRequestedData = _serviceRequest.GetAll(pageNumber, pageSize,userId,type);
                if (serviceRequestedData != null)
                {
                    return Ok(serviceRequestedData);
                }
                return NotFound(serviceRequestedData);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpPost]
        [Route("create")]
       public ActionResult<string> CreateServiceRequest(ServiceRequest serviceRequest)
        {
            try
            {
                long userId = Convert.ToInt64((User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserId").Value);
                if (serviceRequest != null)
                {
                    serviceRequest.CreateBy = userId;
                    serviceRequest.CreateAt = DateTime.Now;
                    var response = _serviceRequest.CreateService(serviceRequest);
                    if (response)
                    {
                        return Ok("Successfully create service request!");
                    }
                    return BadRequest();
                }

                return NotFound("Invalid request");
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
        [HttpPut]
        [Route("accept")]
        public ActionResult<string> AcceptService(AcceptService acceptService)
        {
            try
            {
                long userId = Convert.ToInt64((User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserId").Value);
                string userType = (User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserType").Value;

                var serviceRequestDetails = _serviceRequest.Get(acceptService.Id);
                if (serviceRequestDetails != null)
                {
                    if (userType.ToLower() == "admin")
                    {
                        serviceRequestDetails.ServiceStatus = acceptService.ServiceStatus;
                        serviceRequestDetails.UpdateBy = userId;
                        serviceRequestDetails.UpdateAt = DateTime.Now;
                        bool acceptResult = _serviceRequest.Update(serviceRequestDetails);
                        if (acceptResult)
                        {
                            return Ok("Successfully approved service.");
                        }
                        return BadRequest();
                    }
                    else
                    {
                        serviceRequestDetails.ServiceStatus = acceptService.ServiceStatus;
                        serviceRequestDetails.MechanicStatus = "Approved";
                        serviceRequestDetails.UpdateBy = userId;
                        serviceRequestDetails.UpdateAt = DateTime.Now;
                        bool acceptResult = _serviceRequest.Update(serviceRequestDetails);
                        if (acceptResult)
                        {
                            return Ok("Successfully reject service.");
                        }
                        return BadRequest();
                    }
                   
                }
                else
                {
                    return NotFound("Service is not available.");
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Route("expertmechanics")]
        public ActionResult<User> GetAllExpertMechanicsByCategory(long serviceRequestId)
        {
            try
            {
                var serviceRequestDetails = _serviceRequest.Get(serviceRequestId);
                var allExpertMechanics = _user.GetAll("Mechanic", serviceRequestDetails.ServiceId);
                return Ok(allExpertMechanics);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        [HttpPut]
        [Route("addmachanic")]
        public ActionResult<string> AddMechanic(AddMechanic addMechanic)
        {
            try {
                long userId = Convert.ToInt64((User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserId").Value);
                var serviceRequestDetails = _serviceRequest.Get(addMechanic.ServiceId);
                if (serviceRequestDetails != null)
                {
                    serviceRequestDetails.MechanicId = addMechanic.MechanicId;
                    serviceRequestDetails.UpdateBy = userId;
                    serviceRequestDetails.UpdateAt = DateTime.Now;
                    var acceptResult = _serviceRequest.Update(serviceRequestDetails);
                    if (acceptResult)
                    {
                        return Ok("Successfully added mechanic.");
                    }
                    return BadRequest();
                }
                else
                {
                    return NotFound("Service is not available.");
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("reject")]
        public ActionResult<string> RejectService(RejectService rejectService)
        {
            try
            {
                long userId = Convert.ToInt64((User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserId").Value);
                string userType = (User.Identity as ClaimsIdentity).Claims.First(c => c.Type == "UserType").Value;

                var serviceRequestDetails = _serviceRequest.Get(rejectService.Id);
                if (serviceRequestDetails != null)
                {
                    
                    if (userType.ToLower() == "admin")
                    {
                        serviceRequestDetails.MechanicId = null;
                        serviceRequestDetails.ServiceStatus = "Reject"; 
                        serviceRequestDetails.UpdateBy = userId;
                        serviceRequestDetails.UpdateAt = DateTime.Now;
                        bool acceptResult = _serviceRequest.Update(serviceRequestDetails);
                    }
                    else
                    {
                        serviceRequestDetails.MechanicId = null;
                        serviceRequestDetails.MechanicStatus = "Reject";
                        serviceRequestDetails.UpdateBy = userId;
                        serviceRequestDetails.UpdateAt = DateTime.Now;
                        bool acceptResult = _serviceRequest.Update(serviceRequestDetails);
                    }
                    _rejectReason.ServiceRequestId = rejectService.Id;
                    _rejectReason.Reason = rejectService.Reason;
                    _rejectReason.CreateBy = userId;
                    _rejectReason.CreateAt = DateTime.Now;
                    _rejectReason.IsActive = true;
                    bool serviceRejectDetails = _serviceRequest.Create(_rejectReason);
                    if (serviceRejectDetails)
                    {
                        return Ok("Successfully reject service.");
                    }
                    return BadRequest();
                }
                else
                {
                    return NotFound("Service is not found");
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}