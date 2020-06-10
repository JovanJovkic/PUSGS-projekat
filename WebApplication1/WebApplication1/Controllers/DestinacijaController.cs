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
    public class DestinacijaController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public DestinacijaController(AuthenticationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Destinacija>>> GetDestinacije()
        {
            return await _context.Destinacije.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Destinacija>> GetDestinacija(int id)
        {
            var destinacija = await _context.Destinacije.FindAsync(id);

            if (destinacija == null)
            {
                return NotFound();
            }

            return destinacija;
        }

        [HttpDelete]
        [Route("DeleteDestinacija/{id}")]
        public async Task<ActionResult<Destinacija>> DeleteDestinacija(int id)
        {
            var destinacije = await _context.Destinacije.FindAsync(id);
            if (destinacije == null)
            {
                return NotFound();
            }

            _context.Destinacije.Remove(destinacije);
            await _context.SaveChangesAsync();

            return destinacije;
        }


        [HttpPost]
        [Route("AddDestinacija")]
        public async Task<ActionResult<Destinacija>> AddDestinacija(Destinacija destinacija)
        {

            _context.Destinacije.Add(destinacija);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDestinacija", new { id = destinacija.Id }, destinacija);
        }

        [Route("UpdateDestinacija")]
        public async Task<IActionResult> UpdateDestinacija(Destinacija destinacija)
        {
            _context.Entry(destinacija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DestinacijaExists(destinacija.Id))
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

        [HttpGet]
        [Route("GetDestinacijaZaOdredjenuAvioKompaniju/{id}")]
        public async Task<ActionResult<IEnumerable<Destinacija>>> GetDestinacijaZaOdredjenuAvioKompaniju(int id)
        {
            List<Destinacija> destinacije = await _context.Destinacije.Where(x => x.AirCompanyID == id).ToListAsync();

            if (destinacije == null)
            {
                return NotFound();
            }


            return destinacije;
        }

        private bool DestinacijaExists(int id)
        {
            return _context.Destinacije.Any(e => e.Id == id);
        }
    }
}