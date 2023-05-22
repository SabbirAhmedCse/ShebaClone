using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ServiceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
