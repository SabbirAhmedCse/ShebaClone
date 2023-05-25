using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions conn) : base(conn)
        {

        }

        public DbSet<User> Users { get; set; } 
        public DbSet<ServiceRequest> ServiceRequests { get; set; } 
        public DbSet<RejectReason> RejectReasons { get; set; } 
    }
}
