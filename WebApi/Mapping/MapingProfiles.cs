using System.Linq;
using AutoMapper;
using Car_Info.Controllers.Dtos;
using Car_Info.Core.Models;

namespace Car_Info.Mapping
{
    public class MapingProfiles : Profile
    {
        public MapingProfiles()
        {
            // Domain to API Dto
            CreateMap<Make, MakeDto>();
            CreateMap<Make, KeyValuePairDto>();
            CreateMap<Model, KeyValuePairDto>();
            CreateMap<Feature, KeyValuePairDto>();
            CreateMap<Vehicle, SaveVehicleDto>()
              .ForMember(vr => vr.Contact, opt => opt.MapFrom(v => new ContactDto { Name = v.ContactName, Email = v.ContactEmail, Phone = v.ContactPhone }))
              .ForMember(vr => vr.Features, opt => opt.MapFrom(v => v.Features.Select(vf => vf.FeatureId)));
            CreateMap<Vehicle, VehicleDto>()
              .ForMember(vr => vr.Make, opt => opt.MapFrom(v => v.Model.Make))
              .ForMember(vr => vr.Contact, opt => opt.MapFrom(v => new ContactDto { Name = v.ContactName, Email = v.ContactEmail, Phone = v.ContactPhone }))
              .ForMember(vr => vr.Features, opt => opt.MapFrom(v => v.Features.Select(vf => new KeyValuePairDto { Id = vf.Feature.Id, Name = vf.Feature.Name })));

            // API Dto to Domain
            CreateMap(typeof(QueryResult<>), typeof(QueryResultDto<>));
            CreateMap<VehicleQueryDto, VehicleQuery>();
            CreateMap<SaveVehicleDto, Vehicle>()
              .ForMember(v => v.Id, opt => opt.Ignore())
              .ForMember(v => v.ContactName, opt => opt.MapFrom(vr => vr.Contact.Name))
              .ForMember(v => v.ContactEmail, opt => opt.MapFrom(vr => vr.Contact.Email))
              .ForMember(v => v.ContactPhone, opt => opt.MapFrom(vr => vr.Contact.Phone))
              .ForMember(v => v.Features, opt => opt.Ignore())
              .AfterMap((vr, v) =>
              {
                  // Remove unselected features
                  var removedFeatures = v.Features.Where(f => !vr.Features.Contains(f.FeatureId)).ToList();
                  foreach (var f in removedFeatures)
                      v.Features.Remove(f);

                  // Add new features
                  var addedFeatures = vr.Features.Where(id => !v.Features.Any(f => f.FeatureId == id)).Select(id => new VehicleFeature { FeatureId = id }).ToList();
                  foreach (var f in addedFeatures)
                      v.Features.Add(f);
              });
        }
    }
}