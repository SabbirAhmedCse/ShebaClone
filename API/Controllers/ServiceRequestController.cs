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
        [Route("all")]
        public ActionResult<ServiceRequest> GetAll(int pageNumber, int pageSize)
        {
            try
            {
                var serviceRequestedData = _serviceRequest.GetAll(pageNumber, pageSize);
                return Ok(serviceRequestedData);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut]
        [Route("accept")]
        public ActionResult<string> AcceptService(AcceptService acceptService)
        {
            try
            {
                var serviceRequestDetails = _serviceRequest.Get(acceptService.Id);
                if (serviceRequestDetails != null)
                {
                    serviceRequestDetails.ServiceStatus = acceptService.ServiceStatus;
                    serviceRequestDetails.UpdateBy = 1000;
                    serviceRequestDetails.UpdateAt = DateTime.Now;
                    var acceptResult = _serviceRequest.Update(serviceRequestDetails);
                    return Ok(acceptResult);
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
                var serviceRequestDetails = _serviceRequest.Get(addMechanic.ServiceId);
                if (serviceRequestDetails != null)
                {
                    serviceRequestDetails.MechanicId = addMechanic.MechanicId;
                    serviceRequestDetails.UpdateBy = addMechanic.MechanicId;
                    serviceRequestDetails.UpdateAt = DateTime.Now;
                    var acceptResult = _serviceRequest.Update(serviceRequestDetails);
                    return Ok(acceptResult);
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
                var serviceRequestDetails = _serviceRequest.Get(rejectService.Id);
                if (serviceRequestDetails != null)
                {
                    serviceRequestDetails.ServiceStatus = "Reject";
                    var acceptResult = _serviceRequest.Update(serviceRequestDetails);
                    _rejectReason.ServiceRequestId = rejectService.Id;
                    _rejectReason.Reason = rejectService.Reason;
                    _rejectReason.CreateBy = rejectService.UserId;
                    _rejectReason.CreateAt = DateTime.Now;
                    _rejectReason.IsActive = true;
                    var serviceRejectDetails = _serviceRequest.Create(_rejectReason);
                    return Ok(serviceRejectDetails);
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