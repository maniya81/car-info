using System.Collections.Generic;

namespace Car_Info.Controllers.Dtos
{
    public class QueryResultDto<T>
    {
        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
    }

}