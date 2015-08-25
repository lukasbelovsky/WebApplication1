using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using System;
using System.Collections.Generic;

namespace WebApplication1.Model.Pipeline
{
    public interface IBreezeSavePipeline<T> where T : class, new()
    {
        Dictionary<Type, List<EntityInfo>> BeforeSaveEntities(Dictionary<Type, List<EntityInfo>> saveMap);

        void AfterSaveEntities(Dictionary<Type, List<EntityInfo>> saveMap, List<KeyMapping> keyMappings);

        EFContextProvider<T> CurrentContextProvider { get; set; }
    }
}
