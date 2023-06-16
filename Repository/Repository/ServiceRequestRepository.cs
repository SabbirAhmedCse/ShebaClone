using Domain.Interfaces;
using Domain.Models;
using Domain.Models.Actions;
using Domain.Models.Pagination;
using Domain.Models.Views;
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
        private readonly ServiceRequestDetails _serviceRequestDetails;

        public ServiceRequestRepository(AppDbContext appDbContext, PageResponse pageResponse, ServiceRequestDetails serviceRequestDetails)
        {
            _appDbContext = appDbContext;
            _pageResponse = pageResponse;
            _serviceRequestDetails = serviceRequestDetails;
        }


        public bool Create(RejectReason entity)
        {
            try
            {
                var acceptResult = _appDbContext.RejectReasons.Add(entity);
                return _appDbContext.SaveChanges() > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool CreateService(ServiceRequest entity)
        {
            try
            {
                var acceptResult = _appDbContext.ServiceRequests.Add(entity);
                return _appDbContext.SaveChanges() > 0;
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
                var serviceRequestDetails = _appDbContext.ServiceRequests.Find(Id);

                return serviceRequestDetails;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<ServiceRequestDetails> GetAll(int pageNumber, int pageSize, long userId, string userType)
        {
            try
            {
                _pageResponse.TotalRecords = _appDbContext.ServiceRequests.Count();
                _pageResponse.PageNumber = pageNumber;
                _pageResponse.PageSize = pageSize;
                if (userType == "admin")
                {
                    var pagedServiceRequestDatas = (from sr in _appDbContext.ServiceRequests
                                                    join u in _appDbContext.Users on sr.CreateBy equals u.Id
                                                    join s in _appDbContext.Services on sr.ServiceId equals s.Id
                                                    join sc in _appDbContext.ServiceCategories on s.ServicesCategoryId equals sc.Id

                                                    where sr.ServiceStatus != "Reject"
                                                    select new ServiceRequestDetails
                                                    {
                                                        Id = sr.Id,
                                                        CustomerName = u.Name,
                                                        ServiceCategory = sc.CategoryName,
                                                        ServiceSubCategory = s.SubCategory,
                                                        Description = sr.Description,
                                                        ServiceDate = sr.ServiceDate,
                                                        Address = u.Address,
                                                        ServiceStatus = sr.ServiceStatus,
                                                        MechanicStatus = sr.MechanicStatus,

                                                    }).Skip((_pageResponse.PageNumber - 1) * _pageResponse.PageSize)
                                                .Take(_pageResponse.PageSize).ToList();

                    return pagedServiceRequestDatas;
                }
                else if (userType == "mechanic")
                {
                    var pagedServiceRequestDatas = (from sr in _appDbContext.ServiceRequests
                                                    join u in _appDbContext.Users on sr.CreateBy equals u.Id
                                                    join s in _appDbContext.Services on sr.ServiceId equals s.Id
                                                    join sc in _appDbContext.ServiceCategories on s.ServicesCategoryId equals sc.Id

                                                    where sr.MechanicId == userId
                                                    select new ServiceRequestDetails
                                                    {
                                                        Id = sr.Id,
                                                        CustomerName = u.Name,
                                                        ServiceCategory = sc.CategoryName,
                                                        ServiceSubCategory = s.SubCategory,
                                                        Description = sr.Description,
                                                        ServiceDate = sr.ServiceDate,
                                                        Address = u.Address,
                                                        ServiceStatus = sr.ServiceStatus,
                                                        MechanicStatus = sr.MechanicStatus,

                                                    }).Skip((_pageResponse.PageNumber - 1) * _pageResponse.PageSize)
                                                .Take(_pageResponse.PageSize).ToList();

                    return pagedServiceRequestDatas;
                }
                else if (userType == "customer")
                {
                    var pagedServiceRequestDatas = (from sr in _appDbContext.ServiceRequests
                                                    join u in _appDbContext.Users on sr.CreateBy equals u.Id
                                                    join s in _appDbContext.Services on sr.ServiceId equals s.Id
                                                    join sc in _appDbContext.ServiceCategories on s.ServicesCategoryId equals sc.Id

                                                    where sr.CreateBy == userId
                                                    select new ServiceRequestDetails
                                                    {
                                                        Id = sr.Id,
                                                        CustomerName = u.Name,
                                                        ServiceCategory = sc.CategoryName,
                                                        ServiceSubCategory = s.SubCategory,
                                                        Description = sr.Description,
                                                        ServiceDate = sr.ServiceDate,
                                                        Address = u.Address,
                                                        ServiceStatus = sr.ServiceStatus,
                                                        MechanicStatus = sr.MechanicStatus,

                                                    }).Skip((_pageResponse.PageNumber - 1) * _pageResponse.PageSize)
                                                .Take(_pageResponse.PageSize).ToList();

                    return pagedServiceRequestDatas;
                }
                else
                    return null;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool Update(ServiceRequest entity)
        {
            try
            {
                var acceptResult = _appDbContext.ServiceRequests.Update(entity);
                return _appDbContext.SaveChanges() > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}