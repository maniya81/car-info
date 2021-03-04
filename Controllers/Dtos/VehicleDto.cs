using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Car_Info.Controllers.Dtos
{
    public class VehicleDto
    {
        public int Id { get; set; }
        public KeyValuePairDto Model { get; set; }
        public KeyValuePairDto Make { get; set; }
        public bool IsRegistered { get; set; }
        public ContactDto Contact { get; set; }
        public DateTime LastUpdate { get; set; }
        public ICollection<KeyValuePairDto> Features { get; set; }

        public VehicleDto()
        {
            Features = new Collection<KeyValuePairDto>();
        }        
    }
}