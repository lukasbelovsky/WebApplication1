using System;
using Breeze.WebApi2;
using System.Web.Http;
using WebApplication1.Model.UnitOfWork;

namespace WebApplication1.Controllers
{
    [BreezeController]
    [Authorize]
    public class MetadataController : ApiController
    {
        private IUnitOfWork unitOfWork;

        public MetadataController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        [HttpGet]
        public string Metadata()
        {
            return unitOfWork.Metadata();
        }
    }
}