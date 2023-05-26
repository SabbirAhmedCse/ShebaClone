using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models.Pagination
{
    public class PageResponse
    {
        public string UserType { get; set; }  = string.Empty;
        const int maxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        public int TotalPages { get; set; }
        public int TotalRecords { get; set; }
        private int _pageSize = 10;
        public int PageSize
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = (value > maxPageSize) ? maxPageSize : value;
            }
        }
    }
}
