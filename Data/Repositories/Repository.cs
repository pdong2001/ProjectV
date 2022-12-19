using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace Data.Repositories
{
    public class Repository<TKey, TEntity> : IRepository<TKey, TEntity>
        where TEntity : Entity<TKey>
    {
        private readonly DataContext _context;
        private readonly DbSet<TEntity> _dbSet;
        public Repository(DataContext context)
        {
            this._context = context;
            _dbSet = context.Set<TEntity>();
        }

        public IQueryable<TEntity> GetQueryable()
        {
            var query = _dbSet.AsQueryable();
            if (typeof(TEntity).IsSubclassOf(typeof(FullAuditedEntity<TKey>)))
            {
                query = query.Where("IsDeleted = false");
            }
            return query;
        }

        public virtual async Task<TEntity?> AddAsync(TEntity input)
        {
            if (input.Id is Entity<Guid> e && e.Id == Guid.Empty)
            {
                e.Id = Guid.NewGuid();
            }
            _dbSet.Add(input);
            if (await _context.SaveChangesAsync() > 0)
            {
                return input;
            }
            return null;
        }

        public virtual async Task<TEntity?> UpdateAsync(TEntity input)
        {
            _dbSet.Update(input);
            if (await _context.SaveChangesAsync() > 0)
            {
                return input;
            }
            return null;
        }

        public virtual async Task<List<TEntity>> ToListAsync() => await GetQueryable().ToListAsync();

        public virtual async Task<TEntity?> GetAsync(TKey id) => await _dbSet.FindAsync(id);

        public virtual async Task<bool> DeleteAsync(TKey id)
        {
            var entity = await _dbSet.FindAsync(id);
            if (entity == default(TEntity)) return false;
            _dbSet.Remove(entity);
            return await _context.SaveChangesAsync() > 0;
        }

        public virtual Task<int> DeleteAsync(IEnumerable<TKey> keys)
        {
            var query = _dbSet.Where(e => keys.Contains(e.Id));
            _dbSet.RemoveRange(query);
            return _context.SaveChangesAsync();
        }

        public virtual Task<int> SaveChangeAsync()
        {
            return _context.SaveChangesAsync();
        }
    }
}
