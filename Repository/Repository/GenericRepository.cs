using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly AppDbContext _appDbContext;

        private readonly DbSet<T> ShebaDbSet;
        public GenericRepository(AppDbContext appDbContext)
        {
            this._appDbContext = appDbContext;
            ShebaDbSet = appDbContext.Set<T>();
        }
        public T Delete(long Id)
        {
            throw new NotImplementedException();
        }

        public T Get(long Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        public T Insert(T entity)
        {
            throw new NotImplementedException();
        }

        public T Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
