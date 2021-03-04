using System.Threading.Tasks;
using Car_Info.Core;

namespace Car_Info.Persistence
{
    public class UnitOfWork: IUnitOfWork
  {
    private readonly CarDbContext context;

    public UnitOfWork(CarDbContext context)
    {
      this.context = context;
    }

    public async Task CompleteAsync()
    {
      await context.SaveChangesAsync();
    }
  }
}