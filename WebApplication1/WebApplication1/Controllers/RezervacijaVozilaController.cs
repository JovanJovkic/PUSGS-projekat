using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Servis;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RezervacijaVozilaController : ControllerBase
    {
        private readonly MyDbContext _context;
        private RezervacijaServis servis;

        public RezervacijaVozilaController(MyDbContext context)
        {
            _context = context;
            servis = new RezervacijaServis(_context);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RezervacijaVozila>>> GetRezervacijeVozila()
        {
            return await _context.RezervacijeVozila.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RezervacijaVozila>> GetRezervacijaVozila(int id)
        {
            var rezervacija = await _context.RezervacijeVozila.FindAsync(id);

            if (rezervacija == null)
            {
                return NotFound();
            }

            return rezervacija;
        }

        [HttpDelete]
        [Route("DeleteRezervacijaVozila/{id}")]
        public async Task<ActionResult<RezervacijaVozila>> DeleteRezervacijaVozila(int id)
        {
            var rezervacija = await _context.RezervacijeVozila.FindAsync(id);
            if (rezervacija == null)
            {
                return NotFound();
            }

            _context.RezervacijeVozila.Remove(rezervacija);
            await _context.SaveChangesAsync();

            return rezervacija;
        }

        private bool RezervacijaVozilaExists(int id)
        {
            return _context.RezervacijeVozila.Any(e => e.Id == id);
        }

        [HttpPost]
        [Route("AddRezervacijaVozila")]
        public async Task<ActionResult<RezervacijaVozila>> AddRezervacijaVozila(RezervacijaVozila rezervacija)
        {
            rezervacija.Cena = servis.ukupnaCena(rezervacija);
            _context.RezervacijeVozila.Add(rezervacija);
            servis.dodajDatumeVozilu(rezervacija);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRezervacijaVozila", new { id = rezervacija.Id }, rezervacija);
        }

        [Route("UpdateRezervacijaVozila")]
        public async Task<IActionResult> UpdateRezervacijaVozila(RezervacijaVozila rezervacija)
        {
            _context.Entry(rezervacija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RezervacijaVozilaExists(rezervacija.Id))
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
