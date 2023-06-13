using API.Models;
using Domain.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class ServiceRepository : IServiceRepository
    {
        private readonly AppDbContext _appDbContext;
        public ServiceRepository(AppDbContext appDbContext)
        {
            this._appDbContext = appDbContext;
        }

        public async Task<Service> Delete(int Id)
        {
            var service = await _appDbContext.Services.FindAsync(Id);
            if(service == null)
            {
                return service;
            }
            _appDbContext.Services.Remove(service);
            await _appDbContext.SaveChangesAsync();
            return service;
        }

        public async Task<Service> Get(int Id)
        {
            return await _appDbContext.Services.FindAsync(Id);
        }

        public async Task<List<Service>> GetAll()
        {
            return await _appDbContext.Services.ToListAsync();
        }

        public async Task<Service> Insert(Service srv)
        {
            srv.CreateAt = DateTime.Now;
            _appDbContext.Add(srv);
            await _appDbContext.SaveChangesAsync();
            return srv;
        }

        public async Task<Service> Update(Service srv)
        {
            _appDbContext.Entry(srv).State = EntityState.Modified;
            await _appDbContext.SaveChangesAsync();
            return srv;
        }
    }   
}
