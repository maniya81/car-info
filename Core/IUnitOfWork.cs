using System.Threading.Tasks;

namespace Car_Info.Core
{
    public interface IUnitOfWork
    {
    Task CompleteAsync();
  }
}