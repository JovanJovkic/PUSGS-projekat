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
    public class VozilaController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private RentServis servis;
        public VozilaController(AuthenticationContext context)
        {
            _context = context;
            servis = new RentServis(context);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vozilo>>> GetVozila()
        {
            //return await _context.Vozila.ToListAsync();

            List<Vozilo> servisi = _context.Vozila.ToList();

            foreach (Vozilo item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaVozilo(item.Id);
            }

            return servisi;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vozilo>> GetVozilo(int id)
        {
            var vozilo = await _context.Vozila.FindAsync(id);

            if (vozilo == null)
            {
                return NotFound();
            }


            vozilo.Ocena = servis.ProsecnaOcenaZaRentACar(id);

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

        [HttpGet]
        [Route("GetVozilaZaOdredjeniServis/{id}")]
        public async Task<ActionResult<IEnumerable<Vozilo>>> GetVozilaZaOdredjeniServis(int id)
        {
            List<Vozilo> vozila = await _context.Vozila.Where(x => x.RentACarServisID == id).ToListAsync();

            if (vozila == null)
            {
                return NotFound();
            }


            return vozila;
        }

        public List<Vozilo> VozilaZaOdredjeniServis(int id)
        {
            List<Vozilo> vozila = _context.Vozila.Where(x => x.RentACarServisID == id).ToList();

            if (vozila == null)
            {
                return new List<Vozilo>();
            }


            return vozila;
        }

        [Route("PretraziVozila")]
        public List<Vozilo> PretraziVozila(PretragaVozila pretraga)
        {
            List<Vozilo> vozila = _context.Vozila.Where(x => x.RentACarServisID == pretraga.IdRentACar).ToList();

            foreach (Vozilo item in vozila.ToList())
            {
                if(item.TipVozila != pretraga.TipVozila)
                {
                    vozila.Remove(item);
                }
                else if(item.BrojSedista < pretraga.BrojPutnika)
                {
                    vozila.Remove(item);
                }
            }

            foreach (Vozilo voz in vozila.ToList())
            {
                voz.PretvoriUListu();

                bool postoji = false;

                if (voz.ZauzetiDatumi != null)
                {
                    foreach (DateTime datum in voz.ZauzetiDatumi)
                    {
                        if (datum >= pretraga.DatumPreuzimanja && datum <= pretraga.DatumVracanja)
                        {
                            postoji = true;
                        }
                    }
                }

                if (postoji)
                {
                    vozila.Remove(voz);
                }
            }

            return vozila;
        }
    }
}