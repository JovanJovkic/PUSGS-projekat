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
    public class BrzaRezDesController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private RezervacijaDestinacijeServis servis;

        public BrzaRezDesController(AuthenticationContext context)
        {
            _context = context;
            servis = new RezervacijaDestinacijeServis(_context);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BrzaRezervacijaDestinacija>>> GetBrzeRezervacijeDestinacija()
        {
            return await _context.BrzeRezervacijeDestinacije.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BrzaRezervacijaDestinacija>> GetBrzaRezervacijaDestinacija(int id)
        {
            var rezervacija = await _context.BrzeRezervacijeDestinacije.FindAsync(id);

            if (rezervacija == null)
            {
                return NotFound();
            }

            return rezervacija;
        }


        [HttpGet]
        [Route("GetBrzaRezervacijaDestinacijaZaRent/{id}")]
        public async Task<ActionResult<IEnumerable<BrzaRezervacijaDestinacija>>> GetBrzaRezervacijaDestinacijaZaRent(int id)
        {
            List<BrzaRezervacijaDestinacija> lista = _context.BrzeRezervacijeDestinacije.Where(x => x.IdAirCompany == id).ToList();

            if (lista == null)
            {
                return NotFound();
            }

            return lista;
        }

        [HttpDelete]
        [Route("DeleteBrzaRezervacijaDestinacije/{id}")]
        public async Task<ActionResult<BrzaRezervacijaDestinacija>> DeleteBrzaRezervacijaDestinacije(int id)
        {
            var rezervacija = await _context.BrzeRezervacijeDestinacije.FindAsync(id);
            if (rezervacija == null)
            {
                return NotFound();
            }

            _context.BrzeRezervacijeDestinacije.Remove(rezervacija);
            await _context.SaveChangesAsync();

            return rezervacija;
        }

        [HttpPost]
        [Route("Rezervisi")]
        public async Task<ActionResult<BrzaRezervacijaDestinacija>> Rezervisi(BrzaRezervacijaDestinacija rezervacija)
        {
            BrzaRezervacijaDestinacija brza = _context.BrzeRezervacijeDestinacije.Where(x => x.Id == rezervacija.Id).FirstOrDefault();

            if (rezervacija.RowVersion.Length != brza.RowVersion.Length)
            {
                return BadRequest();
            }

            for (int i = 0; i < brza.RowVersion.Length; i++)
            {
                if (brza.RowVersion[i] != rezervacija.RowVersion[i])
                {
                    return BadRequest();
                }
            }

            RezervacijaDestinacije rez = new RezervacijaDestinacije();
            rez.IdKlijenta = rezervacija.IdKlijenta;
            rez.IdAirCompany = rezervacija.IdAirCompany;
            rez.IdDestinacije = rezervacija.IdDestinacije;
            rez.Cena = rezervacija.NovaCena;
            rez.KrajnjiDatum = rezervacija.KrajnjiDatum;
            rez.PocetniDatum = rezervacija.PocetniDatum;
            rez.Zavrseno = false;

            rezervacija.Zavrseno = true;
            _context.Entry(rezervacija).State = EntityState.Modified;
            _context.RezervacijeDestinacija.Add(rez);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {

            }
            return Ok();
        }

        private bool BrzaRezervacijaDestinacijaExists(int id)
        {
            return _context.BrzeRezervacijeDestinacije.Any(e => e.Id == id);
        }
        
        [HttpPost]
        [Route("AddBrzaRezervacijaDestinacije")]
        public async Task<ActionResult<BrzaRezervacijaDestinacija>> AddBrzaRezervacijaDestinacije(BrzaRezervacijaDestinacija rezervacija)
        {
            AirCompany rentservis = _context.AvioKompanije.Find(rezervacija.IdAirCompany);

            //rezervacija.PocetnaCena = servis.ukupnaCena(rezervacija);
            //rezervacija.NovaCena = rezervacija.PocetnaCena - rezervacija.PocetnaCena * rezervacija.Popust / 100;

            _context.BrzeRezervacijeDestinacije.Add(rezervacija);

           // servis.dodajDatumeDestinaciji(rezervacija);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBrzaRezervacijaVozila", new { id = rezervacija.Id }, rezervacija);
        }

        [Route("UpdateBrzaRezervacijaVozila")]
        public async Task<IActionResult> UpdateBrzaRezervacijaVozila(BrzaRezervacijaVozila rezervacija)
        {
            _context.Entry(rezervacija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BrzaRezervacijaDestinacijaExists(rezervacija.Id))
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

        public double ukupnaCena(BrzaRezervacijaDestinacija rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            RentACarServis rentACar = _context.RentACarServisi.Find(rezervacija.IdAirCompany);

            double ukupnaCena = rentACar.cenaPrviDan;

            if (pocetni != krajnji)
            {
                TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                while (pocetni != krajnji)
                {
                    pocetni += ts;
                    ukupnaCena += rentACar.cenaSledeciDan;
                }
            }

            return ukupnaCena;
        }
    }
}
