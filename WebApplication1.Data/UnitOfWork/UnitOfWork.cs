using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using WebApplication1.Data.Repositories;
using WebApplication1.Model;
using WebApplication1.Model.Pipeline;
using WebApplication1.Model.Repositories;
using WebApplication1.Model.UnitOfWork;

namespace WebApplication1.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EFContextProvider<DataContext> contextProvider;

        public UnitOfWork(IBreezeSavePipeline<DataContext> breezeSavePipeline)
        {
            contextProvider = new EFContextProvider<DataContext>();
            contextProvider.BeforeSaveEntitiesDelegate = breezeSavePipeline.BeforeSaveEntities;
            contextProvider.AfterSaveEntitiesDelegate = breezeSavePipeline.AfterSaveEntities;
            breezeSavePipeline.CurrentContextProvider = contextProvider;

            ItemRepository = new Repository<Item>(contextProvider.Context);
            DriverRepository = new Repository<Driver>(contextProvider.Context);
            ZipRepository = new Repository<ZIP>(contextProvider.Context);

        }

        public IRepository<Item> ItemRepository { get; private set; }
        public IRepository<Driver> DriverRepository { get; private set; }
        public IRepository<ZIP> ZipRepository { get; private set; }

        public void Commit()
        {
            contextProvider.Context.SaveChanges();
        }

        public string Metadata()
        {
            return contextProvider.Metadata();
        }

        public Breeze.ContextProvider.SaveResult Commit(Newtonsoft.Json.Linq.JObject changeSet)
        {
            TransactionSettings transactionSettings = new TransactionSettings() { TransactionType = TransactionType.TransactionScope };

            return contextProvider.SaveChanges(changeSet, transactionSettings);
        }


        
    }
}