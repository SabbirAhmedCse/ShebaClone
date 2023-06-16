using API.Models;
using Domain.Interfaces;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class ServiceCategoryRepository : IServiceCategoryRepository
    {
        public readonly AppDbContext _appDbContext;
        public ServiceCategoryRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public ServiceCategory Get(int id)
        {
            
            try
            {
                var serviceCtegoryDetails = _appDbContext.ServiceCategories.Find(id);
                return serviceCtegoryDetails;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<ServiceCategory> GetAll()
        {
            try
            {
                var serviceCategories = _appDbContext.ServiceCategories.ToList();
                return serviceCategories;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }

    
}

