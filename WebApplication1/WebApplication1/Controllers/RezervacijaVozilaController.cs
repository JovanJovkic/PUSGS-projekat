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
        private readonly AuthenticationContext _context;
        private RezervacijaServis servis;

        public RezervacijaVozilaController(AuthenticationContext context)
        {
            _context = context;
            servis = new RezervacijaServis(_context);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RezervacijaVozila>>> GetRezervacijeVozila()
        {
            return await _context.RezervacijeVozila.ToListAsync();
        }

        [HttpGet]
        [Route("GetRezervacijeVozilaZaOdredjenog/{email}")]
        public async Task<ActionResult<IEnumerable<RezervacijaVozila>>> GetRezervacijeVozilaZaOdredjenog(string email)
        {


            List<RezervacijaVozila> rezervacija = _context.RezervacijeVozila.ToList();

            if(rezervacija==null)
            {
                rezervacija = new List<RezervacijaVozila>();
            }

            foreach (RezervacijaVozila item in rezervacija.ToList())
            {
                if(item.IdKlijenta != email)
                {
                    rezervacija.Remove(item);
                }
            }

            foreach (RezervacijaVozila item in rezervacija.ToList())
            {
                if(DateTime.Now < item.KrajnjiDatum)
                {
                    item.Zavrseno = true;
                }
            }

            return rezervacija;

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
            bool dozvola = servis.dodajDatumeVozilu(rezervacija);

            if (dozvola)
            {
                _context.RezervacijeVozila.Add(rezervacija);

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (Exception e)
                {

                }

                // return CreatedAtAction("GetRezervacijaVozila", new { id = rezervacija.Id }, rezervacija);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
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

        [HttpPost]
        [Route("Oceni")]
        public async Task<ActionResult> Oceni(Oceni oceni)
        {
            RezervacijaVozila rezervacija = _context.RezervacijeVozila.Find(oceni.IdRezervacije);

            rezervacija.OcenaZaRentACar = oceni.OcenaKompanja;
            rezervacija.OcenaZaVozilo = oceni.OcenaVozAvio;

            _context.Entry(rezervacija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch(Exception e)
            {
                return NoContent();
            }

            return Ok();
        }


    }
}
