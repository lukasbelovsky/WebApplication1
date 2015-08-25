using WebApplication1.Data;
using WebApplication1.Model.Pipeline;
namespace WebApplication1.Pipeline
{
    public class BreezeSavePipeline : IBreezeSavePipeline<DataContext>
    {
        public System.Collections.Generic.Dictionary<System.Type, System.Collections.Generic.List<Breeze.ContextProvider.EntityInfo>> BeforeSaveEntities(System.Collections.Generic.Dictionary<System.Type, System.Collections.Generic.List<Breeze.ContextProvider.EntityInfo>> saveMap)
        {
            return saveMap;
        }

        public void AfterSaveEntities(System.Collections.Generic.Dictionary<System.Type, System.Collections.Generic.List<Breeze.ContextProvider.EntityInfo>> saveMap, System.Collections.Generic.List<Breeze.ContextProvider.KeyMapping> keyMappings)
        {
        }

        public Breeze.ContextProvider.EF6.EFContextProvider<DataContext> CurrentContextProvider{get; set;}
    }
}