using Breeze.ContextProvider;
using Breeze.WebApi2;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Web.Http;
using WebApplication1.Model;
using WebApplication1.Model.UnitOfWork;

namespace WebApplication1.Controllers
{
    [BreezeController]
    [AllowAnonymous]
    public class DataController : ApiController
    {
        private IUnitOfWork unitOfWork;

        public DataController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return unitOfWork.Commit(saveBundle);
        }

        [HttpGet]
        public IQueryable<Item> Items()
        {
            return unitOfWork.ItemRepository.All();
        }

        [HttpGet]
        public IQueryable<Driver> Drivers()
        {
            return unitOfWork.DriverRepository.All();
        }
    }
}