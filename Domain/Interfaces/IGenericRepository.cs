using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        public IEnumerable<T> GetAll();
        public T Get(long Id);
        public T Insert(T entity);
        public T Update(T entity);
        public T Delete(long Id);
    }
}
