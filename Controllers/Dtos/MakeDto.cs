using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Car_Info.Controllers.Dtos
{
    public class MakeDto
    {
        
        public int Id { get; set; }
    
        public string Name { get; set; }
        public ICollection<ModelDto> Models { get; set; }

        public MakeDto()
        {
            Models = new Collection<ModelDto>();
        }
    }
}