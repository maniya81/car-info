using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Car_Info.Core;
using Car_Info.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Car_Info.Persistence
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly CarDbContext context;
        public PhotoRepository(CarDbContext context)
        {
            this.context = context;
        }
        public async Task<IEnumerable<Photo>> GetPhotos(int vehicleId)
        {
            return await context.Photos
              .Where(p => p.VehicleId == vehicleId)
              .ToListAsync();
        }
    }

}

