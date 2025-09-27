using AutoMapper;
using Car_Info.Core;
using Car_Info.Core.Models;
using Car_Info.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;

namespace CarInfo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<PhotoSettings>(Configuration.GetSection("PhotoSettings"));

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                      .AllowAnyMethod()
                      .AllowAnyHeader();
            }));

            // Use LocalDbConnection for local environment, otherwise use AzureCarInfoDb or secret-shared connection string
            string connStr;
            if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development")
            {
                connStr = Configuration.GetConnectionString("LocalDbConnection");
            }
            else
            {
                // Try to get AzureCarInfoDb from appsettings.json
                connStr = Configuration.GetConnectionString("AzureCarInfoDb");
                // Fallback to secret sharing methods (User Secrets, Environment Variables, Azure App Settings)
                if (string.IsNullOrWhiteSpace(connStr))
                {
                    connStr = Environment.GetEnvironmentVariable("ConnectionStrings__AzureCarInfoDb")
                              ?? Environment.GetEnvironmentVariable("AzureCarInfoDb");
                }
            }
            if (string.IsNullOrWhiteSpace(connStr))
            {
                throw new InvalidOperationException("Database connection string is not configured. Provide ConnectionStrings:LocalDbConnection for local dev or ConnectionStrings:AzureCarInfoDb via User Secrets/App Settings/Environment Variables for production.");
            }
            services.AddDbContext<CarDbContext>(opt => opt.UseSqlServer(connStr));
            services.AddScoped<IVehicleRepository, VehicleRepository>();
            services.AddScoped<IPhotoRepository, PhotoRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "CarInfo", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "CarInfo v1"));
            }
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "CarInfo v1");
                c.RoutePrefix = string.Empty;  // Set Swagger UI at apps root
            });

            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseStaticFiles();

            app.UseCors("MyPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
