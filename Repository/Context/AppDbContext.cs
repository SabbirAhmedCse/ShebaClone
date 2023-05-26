using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using API.Models;
using Domain.Models;

namespace Repository.Context;

public partial class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> conn)
        : base(conn)
    {
    }

        public virtual DbSet<Service> Services { get; set; }

        public virtual DbSet<ServiceCategory> ServiceCategories { get; set; }

        public DbSet<User> Users { get; set; } 
        public DbSet<ServiceRequest> ServiceRequests { get; set; } 
        public DbSet<RejectReason> RejectReasons { get; set; } 
    
}
   

