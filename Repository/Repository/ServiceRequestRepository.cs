using Domain.Interfaces;
using Domain.Models;
using Domain.Models.Actions;
using Domain.Models.Pagination;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class ServiceRequestRepository : IServiceRequestRepository
    {
        private readonly AppDbContext _appDbContext;
        private readonly PageResponse _pageResponse;

        public ServiceRequestRepository(AppDbContext appDbContext, PageResponse pageResponse)
        {
            _appDbContext = appDbContext;
            _pageResponse = pageResponse;
        }


        public string Create(RejectReason entity)
        {
            try
            {
                var acceptResult = _appDbContext.RejectReasons.Add(entity);
                if (acceptResult != null)
                {
                    _appDbContext.SaveChanges();
                    return "Reject Successfully.";
                }
                else
                {
                    return "Reject faild";
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ServiceRequest Get(long Id)
        {
            try
            {
                var serviceRequests = _appDbContext.ServiceRequests.Find(Id);
                return serviceRequests;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<ServiceRequest> GetAll(int pageNumber, int pageSize)
        {
            try{
                _pageResponse.TotalRecords = _appDbContext.ServiceRequests.Count();
                _pageResponse.PageNumber = pageNumber;
                _pageResponse.PageSize = pageSize;
                var pagedServiceRequestData = _appDbContext.ServiceRequests.Skip((_pageResponse.PageNumber - 1) * _pageResponse.PageSize).Take(_pageResponse.PageSize).ToList();
                return pagedServiceRequestData;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string Update(ServiceRequest entity)
        {
            try
            {
                var acceptResult = _appDbContext.ServiceRequests.Update(entity);
                if (acceptResult != null)
                {
                    _appDbContext.SaveChanges();
                    return "Successfull Update.";
                }
                else
                {
                    return "Update faild";
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
