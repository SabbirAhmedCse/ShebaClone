using API.Models;
using Domain.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Update.Internal;
using Repository.Context;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly IServiceRepository _service;
        public ServiceController(IServiceRepository service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Service>>> Get()
        {
            return await _service.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Service>> Get(int id)
        {
            var service = await _service.Get(id);
            if (service == null)
            {
                return NotFound();
            }
            return service;
        }

        [HttpPost]
        public async Task<ActionResult<Service>> Post(Service srv)
        {
            if (srv == null) return BadRequest();
             await _service.Insert(srv);
            return  CreatedAtAction(nameof(Get), new { id = srv.Id }, srv);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Service srv)
        {
            if (id != srv.Id) return BadRequest();
            await _service.Update(srv);
            return NoContent();
            
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Service>> Delete(int id)
        {
            var service = await _service.Delete(id);
            if (service == null)
            {
                return NotFound();
            }
            return service;
        }
    }
}
