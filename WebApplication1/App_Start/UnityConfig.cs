using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;
using WebApplication1.Data;
using WebApplication1.Data.UnitOfWork;
using WebApplication1.Model.Pipeline;
using WebApplication1.Model.UnitOfWork;
using WebApplication1.Pipeline;

namespace WebApplication1
{
    public static class UnityConfig
    {
        public static void RegisterComponents(HttpConfiguration config)
        {
			var container = new UnityContainer();

            container.RegisterType<IUnitOfWork, UnitOfWork>();
            container.RegisterType<IBreezeSavePipeline<DataContext>, BreezeSavePipeline>();

            config.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}