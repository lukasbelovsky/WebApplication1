using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using WebApplication1.Model.Repositories;

namespace WebApplication1.Data.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected DbContext Context { get; private set; }

        public Repository(DbContext context)
        {
            Context = context;
        }

        public IQueryable<TEntity> All()
        {
            return Context.Set<TEntity>();
        }

        public IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return Context.Set<TEntity>().Where(predicate);
        }

        public TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate)
        {
            return Context.Set<TEntity>().Where(predicate).FirstOrDefault();
        }

        public TEntity First(Expression<Func<TEntity, bool>> predicate)
        {
            return Context.Set<TEntity>().Where(predicate).First();
        }

        public TEntity GetById(Guid Id)
        {
            return Context.Set<TEntity>().Find(Id);
        }

        public void Add(TEntity entity)
        {
            Context.Set<TEntity>().Add(entity);
        }

        public void Remove(TEntity entity)
        {
            Context.Set<TEntity>().Remove(entity);
        }

        public void Attach(TEntity entity)
        {
            Context.Set<TEntity>().Attach(entity);
        }
    }
}
