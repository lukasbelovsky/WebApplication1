using System;
using System.Linq;
using System.Linq.Expressions;

namespace WebApplication1.Model.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> All();
        IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
        TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate);
        TEntity First(Expression<Func<TEntity, bool>> predicate);
        TEntity GetById(Guid Id);

        void Add(TEntity entity);
        void Remove(TEntity entity);
        void Attach(TEntity entity);
    }
}
