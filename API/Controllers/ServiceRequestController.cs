using Domain.Interfaces;
using Domain.Models;
using Domain.Models.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    
    public class ServiceRequestController : ControllerBase
    {
        private readonly IServiceRequestRepository _serviceRequest;
        private readonly IUserRepository _user;
        private readonly RejectReason _rejectReason;
        public ServiceRequestController(IServiceRequestRepository serviceRequest, IUserRepository user, RejectReason rejectReason)
        {
            _serviceRequest = serviceRequest;
            _user = user;
            _rejectReason = rejectReason;
        }

        [HttpGet]
        public ActionResult<ServiceRequest> GetById(long Id)
        {
            try
            {
                var serviceRequestDetails = _serviceRequest.Get(Id);
                return Ok(serviceRequestDetails);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
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
                if(serviceRequestDetails != null)
                {
                    serviceRequestDetails.ServiceStatus = "Approve";
                    serviceRequestDetails.UpdateBy = acceptService.UserId;
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
        public ActionResult<User> GetAllExpertMechanicsByCategory(string category)
        {
            try
            {
                var allExpertMechanics = _user.GetAll("Mechanic", category);
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
                var serviceRequestDetails = _serviceRequest.Get(addMechanic.Id);
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
                if(serviceRequestDetails != null)
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
