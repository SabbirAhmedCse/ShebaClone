using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using Repository.Repository;

var builder = WebApplication.CreateBuilder(args);

// Database connection
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DbConnection"));
});

// Add Cors for any application;    
builder.Services.AddCors(opt => opt.AddPolicy("AppCors", builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));

// Add Scope
builder.Services.AddScoped(typeof(IUserRepository), typeof(UserRepository));
builder.Services.AddScoped(typeof(IServiceRepository), typeof(ServiceRepository));
builder.Services.AddScoped(typeof(IServiceRequestRepository), typeof(ServiceRequestRepository));


// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AppCors");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
