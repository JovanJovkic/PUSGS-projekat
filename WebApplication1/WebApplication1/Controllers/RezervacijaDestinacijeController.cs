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
    public class RezervacijaDestinacijeController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private RezervacijaDestinacijeServis servis;

        public RezervacijaDestinacijeController(AuthenticationContext context)
        {
            _context = context;
            servis = new RezervacijaDestinacijeServis(_context);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RezervacijaDestinacije>>> GetRezervacijeDestinacija()
        {
            return await _context.RezervacijeDestinacija.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RezervacijaDestinacije>> GetRezervacijaDestinacija(int id)
        {
            var rezervacija = await _context.RezervacijeDestinacija.FindAsync(id);

            if (rezervacija == null)
            {
                return NotFound();
            }

            return rezervacija;
        }

        [HttpGet]
        [Route("GetRezervacijeDestinacijaZaOdredjenog/{email}")]
        public async Task<ActionResult<IEnumerable<RezervacijaDestinacije>>> GetRezervacijeDestinacijaZaOdredjenog(string email)
        {


            List<RezervacijaDestinacije> rezervacija = _context.RezervacijeDestinacija.ToList();

            if (rezervacija == null)
            {
                rezervacija = new List<RezervacijaDestinacije>();
            }

            foreach (RezervacijaDestinacije item in rezervacija.ToList())
            {
                if (item.IdKlijenta != email)
                {
                    rezervacija.Remove(item);
                }
            }

            foreach (RezervacijaDestinacije item in rezervacija.ToList())
            {
                if (DateTime.Now < item.KrajnjiDatum)
                {
                    item.Zavrseno = true;
                }
            }

            return rezervacija;

        }

        [HttpDelete]
        [Route("DeleteRezervacijaDestinacija/{id}")]
        public async Task<ActionResult<RezervacijaDestinacije>> DeleteRezervacijaDestinacija(int id)
        {
            var rezervacija = await _context.RezervacijeDestinacija.FindAsync(id);
            if (rezervacija == null)
            {
                return NotFound();
            }

            _context.RezervacijeDestinacija.Remove(rezervacija);
            await _context.SaveChangesAsync();

            return rezervacija;
        }

        private bool RezervacijaDestinacijaExists(int id)
        {
            return _context.RezervacijeDestinacija.Any(e => e.Id == id);
        }

        [HttpPost]
        [Route("AddRezervacijaDestinacija")]
        public async Task<ActionResult<RezervacijaDestinacije>> AddRezervacijaDestinacija(RezervacijaDestinacije rezervacija)
        {
            rezervacija.Cena = servis.ukupnaCena(rezervacija);
            bool dozvola = servis.dodajDatumeDestinaciji(rezervacija);

            if (dozvola)
            {
                _context.RezervacijeDestinacija.Add(rezervacija);

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (Exception e)
                {

                }

                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [Route("UpdateRezervacijaDestinacija")]
        public async Task<IActionResult> UpdateRezervacijaDestinacija(RezervacijaDestinacije rezervacija)
        {
            _context.Entry(rezervacija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RezervacijaDestinacijaExists(rezervacija.Id))
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
            RezervacijaDestinacije rezervacija = _context.RezervacijeDestinacija.Find(oceni.IdRezervacije);

            rezervacija.OcenaZaKomapaniju = oceni.OcenaKompanja;
            rezervacija.OcenaZaDestinaciju = oceni.OcenaVozAvio;

            _context.Entry(rezervacija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                return NoContent();
            }

            return Ok();
        }
    }
}
