using Data.Models;
using Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IPagedCRUDService<TKey, TEntity, TDto, TUpSert, TLookUp>
        where TEntity : Entity<TKey>
        where TLookUp : PageLookUpDto
    {
        public Task<ServiceResponse<TKey>> CreateAsync(TUpSert input);
        public Task<ServiceResponse> UpdateAsync(TKey id, TUpSert input);
        public Task<ServiceResponse> DeleteAsync(TKey id);
        public Task<ServiceResponse<int>> DeleteAsync(IEnumerable<TKey> keys);
        public Task<ServiceResponse<TDto>> GetAsync(TKey id);
        public Task<ServiceResponse<List<TDto>>> GetListAsync();
        public Task<ServiceResponse<PageResultDto<TDto>>> SearchAsync(TLookUp request);
    }
}
