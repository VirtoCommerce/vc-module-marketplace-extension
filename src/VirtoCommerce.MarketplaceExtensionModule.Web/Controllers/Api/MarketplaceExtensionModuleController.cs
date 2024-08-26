using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VirtoCommerce.MarketplaceExtensionModule.Core;

namespace VirtoCommerce.MarketplaceExtensionModule.Web.Controllers.Api
{
    [Route("api/marketplace-extension-module")]
    public class MarketplaceExtensionModuleController : Controller
    {
        // GET: api/marketplace-extension-module
        /// <summary>
        /// Get message
        /// </summary>
        /// <remarks>Return "Hello world!" message</remarks>
        [HttpGet]
        [Route("")]
        [Authorize(ModuleConstants.Security.Permissions.Read)]
        public ActionResult<string> Get()
        {
            return Ok(new { result = "Hello world!" });
        }
    }
}
