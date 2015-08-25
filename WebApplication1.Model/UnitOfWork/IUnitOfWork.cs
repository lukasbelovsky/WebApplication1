using Breeze.ContextProvider;
using Newtonsoft.Json.Linq;
using WebApplication1.Model.Repositories;

namespace WebApplication1.Model.UnitOfWork
{
    public interface IUnitOfWork
    {
        IRepository<Item> ItemRepository { get; }
        IRepository<Driver> DriverRepository { get; }

        void Commit();

        /// <summary>
        /// Breeze metadata
        /// </summary>
        /// <returns></returns>
        string Metadata();

        /// <summary>
        /// Breeze commit
        /// </summary>
        /// <returns></returns>
        SaveResult Commit(JObject changeSet);
    }
}
