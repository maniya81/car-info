using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Car_Info.Controllers.Dtos;
using Car_Info.Models;
using Car_Info.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Car_Info.Controllers
{
    public class FeaturesController
    {
        private readonly CarDbContext _context;
        private readonly IMapper _mapper;
        public FeaturesController(CarDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }
        [HttpGet("/api/Features")]
        public async Task<IEnumerable<FeatureDto>> GetFeatures()
        {
          var Features = await _context.Features.ToListAsync();
          return _mapper.Map<List<Feature>, List<FeatureDto>>(Features);
        }
    }
}