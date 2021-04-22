using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Car_Info.Controllers.Dtos
{
    public class SaveVehicleDto
    {
        public int? Id { get; set; }
        public int ModelId { get; set; }
        public bool IsRegistered { get; set; }

        [Required]
        public ContactDto Contact { get; set; }
        public ICollection<int> Features { get; set; }

        public SaveVehicleDto()
        {
            Features = new Collection<int>();
        }
    }
}