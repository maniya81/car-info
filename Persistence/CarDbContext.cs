using Microsoft.EntityFrameworkCore;

namespace Car_Info.Persistence
{
    public class CarDbContext :  DbContext
    {
        public CarDbContext(DbContextOptions<CarDbContext> options) : base(options)
        {

        }
    }
}
