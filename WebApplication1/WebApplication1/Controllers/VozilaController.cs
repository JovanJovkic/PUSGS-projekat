using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VozilaController : ControllerBase
    {
        private readonly MyDbContext _context;

        public VozilaController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vozilo>>> GetVozila()
        {
            return await _context.Vozila.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vozilo>> GetVozilo(int id)
        {
            var vozilo = await _context.Vozila.FindAsync(id);

            if (vozilo == null)
            {
                return NotFound();
            }

            return vozilo;
        }

        [HttpDelete]
        [Route("DeleteVozilo/{id}")]
        public async Task<ActionResult<Vozilo>> DeleteVozilo(int id)
        {
            var vozila = await _context.Vozila.FindAsync(id);
            if (vozila == null)
            {
                return NotFound();
            }

            _context.Vozila.Remove(vozila);
            await _context.SaveChangesAsync();

            return vozila;
        }

        private bool VoziloExists(int id)
        {
            return _context.Vozila.Any(e => e.Id == id);
        }

        [HttpPost]
        [Route("AddVozilo")]
        public async Task<ActionResult<Vozilo>> AddVozilo(Vozilo vozilo)
        {

            _context.Vozila.Add(vozilo);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVozilo", new { id = vozilo.Id }, vozilo);
        }

        [Route("UpdateVozilo")]
        public async Task<IActionResult> UpdateVozilo(Vozilo vozilo)
        {
            _context.Entry(vozilo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VoziloExists(vozilo.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
    }
}