using System.Collections.Generic;
using System.Threading.Tasks;
using Car_Info.Core.Models;

namespace Car_Info.Core
{
    public interface IPhotoRepository
    {
        Task<IEnumerable<Photo>> GetPhotos(int vehicleId);
    }
}