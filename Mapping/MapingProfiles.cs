using AutoMapper;
using Car_Info.Controllers.Dtos;
using Car_Info.Models;

namespace Car_Info.Mapping
{
    public class MapingProfiles : Profile
    {
     public MapingProfiles()
     {
        CreateMap<Make, MakeDto>();
        CreateMap<Model, ModelDto>();
        CreateMap<Feature, FeatureDto>();
     }
    }
}