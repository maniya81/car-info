using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Car_Info.Controllers.Dtos;
using Car_Info.Core.Models;
using Car_Info.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Car_Info.Controllers
{
    public class FeaturesController: Controller
  {
    private readonly CarDbContext context;
    private readonly IMapper mapper;
    public FeaturesController(CarDbContext context, IMapper mapper)
    {
      this.mapper = mapper;
      this.context = context;
    }

    [HttpGet("/api/features")]
    public async Task<IEnumerable<KeyValuePairDto>> GetFeatures()
    {
      var features = await context.Features.ToListAsync();
      
      return mapper.Map<List<Feature>, List<KeyValuePairDto>>(features); 
    }
  }
}