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
    public class MakesController : Controller
    {
        private readonly CarDbContext _context;
        private readonly IMapper _mapper;
        public MakesController(CarDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }
        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeDto>> GetMakes()
        {
          var makes = await _context.Makes.Include(m => m.Models).ToListAsync();
          return _mapper.Map<List<Make>, List<MakeDto>>(makes);
        }


    }
}