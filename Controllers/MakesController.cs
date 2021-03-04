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
    public class MakesController : Controller
  {
    private readonly CarDbContext context;
    private readonly IMapper mapper;
    public MakesController(CarDbContext context, IMapper mapper)
    {
      this.mapper = mapper;
      this.context = context;
    }

    [HttpGet("/api/makes")]
    public async Task<IEnumerable<MakeDto>> GetMakes()
    {
        var makes = await context.Makes.Include(m => m.Models).ToListAsync();

        return mapper.Map<List<Make>, List<MakeDto>>(makes);
    }
  }
}