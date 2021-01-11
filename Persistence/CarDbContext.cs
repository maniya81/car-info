using Car_Info.Models;
using Microsoft.EntityFrameworkCore;

namespace Car_Info.Persistence
{
    public class CarDbContext :  DbContext
    {
        public CarDbContext(DbContextOptions<CarDbContext> options) : base(options)
        {

        }
         public DbSet<Make> Makes { get; set; }
         public DbSet<Feature> Features { get; set; }
    }
}
