using System.Collections.Generic;
using System.Threading.Tasks;
using Car_Info.Core.Models;

namespace Car_Info.Core
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true); 
        void Add(Vehicle vehicle);
        void Remove(Vehicle vehicle);
        Task<IEnumerable<Vehicle>> GetVehicles(VehicleQuery filter);
    }
}