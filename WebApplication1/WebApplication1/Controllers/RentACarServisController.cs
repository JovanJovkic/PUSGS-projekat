using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Servis;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentACarServisController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private RentServis servis;

        public RentACarServisController(AuthenticationContext context)
        {
            _context = context;
            servis = new RentServis(context);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentACarServis>>> GetRentACarServisi()
        {
            //_context.RentACarServisi.Include("Vozila").ToList();
            //return await _context.RentACarServisi.ToListAsync();

            List<RentACarServis> servisi = _context.RentACarServisi.ToList();

            foreach (RentACarServis item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaRentACar(item.Id);
            }

            return servisi;
        }

        [HttpGet]
        [Route("GetRentACarServisiOdobreni")]
        public async Task<ActionResult<IEnumerable<RentACarServis>>> GetRentACarServisiOdobreni()
        {
            List<RentACarServis> servisi = _context.RentACarServisi.ToList();

            foreach (RentACarServis item in servisi.ToList())
            {
                if(item.Odobreno == false)
                {
                    servisi.Remove(item);
                }
            }

            foreach (RentACarServis item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaRentACar(item.Id);
            }

            return servisi;
        }

        [HttpPut]
        [Route("GetRentACarServisPosleAvio")]
        public async Task<ActionResult<RentACarServis>> GetRentACarServisPosleAvio(RezVozPosleAvio rez)
        {
            List<Filijala> filijale = _context.Filijale.ToList();

            foreach (Filijala item in filijale.ToList())
            {
                if (item.Mesto != rez.Lokacija)
                {
                    filijale.Remove(item);
                }
            }

            RentACarServis rent = new RentACarServis();

            if(filijale.Count==0)
            {
                // nema servisa u tom mestu
                rent = _context.RentACarServisi.FirstOrDefault();
            }
            else
            {
                rent =  _context.RentACarServisi.Find(filijale[0].RentACarServisID);
            }

            return rent;
        }

        [HttpGet]
        [Route("GetRentACarServisiZaAdmina/{id}")]
        public async Task<ActionResult<IEnumerable<RentACarServis>>> GetRentACarServisiZaAdmina(string id)
        {
            List<RentACarServis> servisi = _context.RentACarServisi.ToList();

            foreach (RentACarServis item in servisi.ToList())
            {
                if (item.Admin != id)
                {
                    servisi.Remove(item);
                }
            }

            return servisi;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RentACarServis>> GetRentACarServis(int id)
        {
            var serviss = await _context.RentACarServisi.FindAsync(id);

            if (serviss == null)
            {
                return NotFound();
            }

            serviss.Ocena = servis.ProsecnaOcenaZaRentACar(id);

            return serviss;
        }

        [HttpDelete]
        [Route("DeleteRentACarServis/{id}")]
        public async Task<ActionResult<RentACarServis>> DeleteRentACarServis(int id)
        {
            var servisi = await _context.RentACarServisi.FindAsync(id);
            if (servisi == null)
            {
                return NotFound();
            }


            _context.RentACarServisi.Remove(servisi);
            await _context.SaveChangesAsync();

            return servisi;
        }

        [HttpGet]
        [Route("OdobriRentACarServis/{id}")]
        public async Task<ActionResult<RentACarServis>> OdobriRentACarServis(int id)
        {
            var servisi = await _context.RentACarServisi.FindAsync(id);
            if (servisi == null)
            {
                return NotFound();
            }


            if (!servis.DaLiMozeDaSeOdobri(id))
            {
                return NotFound();
            }

            _context.Entry(servisi).State = EntityState.Modified;
            servisi.Odobreno = true;

            await _context.SaveChangesAsync();

            return servisi;
        }

        private bool RentACarServisExists(int id)
        {
            return _context.RentACarServisi.Any(e => e.Id == id);
        }

        [HttpPost]
        [Route("AddRentACarServis")]
        public async Task<IActionResult> AddRentACarServis(RentACarServis servis)
        {

            _context.RentACarServisi.Add(servis);

            await _context.SaveChangesAsync();

            var result = _context.Entry(servis).Entity;

            return Ok(result);
        }

        [Route("UpdateRentACarServis")]
        public async Task<IActionResult> UpdateRentACarServis(RentACarServis servis)
        {
            _context.Entry(servis).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentACarServisExists(servis.Id))
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

        [HttpPut]
        [Route("PretragaRentACarServis")]
        public List<RentACarServis> PretragaRentACarServis(PretragaRent pretraga)
        {
            List<RentACarServis> servisi =  _context.RentACarServisi.ToList();

            foreach (RentACarServis item in servisi.ToList())
            {
                if (item.Odobreno == false)
                {
                    servisi.Remove(item);
                }
            }

            List<RentACarServis> rezultat = new List<RentACarServis>();

            foreach (RentACarServis item in servisi)
            {
                if(item.Naziv.ToLower().Contains(pretraga.Naziv.ToLower()))
                {
                    rezultat.Add(item);
                }
            }

            foreach (RentACarServis item in rezultat.ToList())
            {
                VozilaController vc = new VozilaController(_context);
                List<Vozilo> vozila = vc.VozilaZaOdredjeniServis(item.Id);

                foreach (Vozilo voz in vozila.ToList())
                {
                    voz.PretvoriUListu();

                    bool postoji = false;

                    if (voz.ZauzetiDatumi != null)
                    {
                        foreach (DateTime datum in voz.ZauzetiDatumi)
                        {
                            if (datum >= pretraga.DatumOd && datum <= pretraga.DatumDo)
                            {
                                postoji = true;
                            }
                        }
                    }

                    if(postoji)
                    {
                        vozila.Remove(voz);
                    }
                }

                if (vozila.Count == 0)
                {
                    rezultat.Remove(item);
                }

            }

            return rezultat;
        }

        [HttpGet]
        [Route("GetMesecniIzvestaj/{id}")]
        public async Task<ActionResult<IEnumerable<int>>> GetMesecniIzvestaj(int id)
        {
            return servis.BrojNaMesecnomNivou(id);
        }

        [HttpGet]
        [Route("GetNedeljniIzvestaj/{id}")]
        public async Task<ActionResult<IEnumerable<int>>> GetNedeljniIzvestaj(int id)
        {
            return servis.BrojNaNedeljnomNivou(id);
        }

        [HttpGet]
        [Route("GetDnevniIzvestaj/{id}")]
        public async Task<ActionResult<IEnumerable<int>>> GetDnevniIzvestaj(int id)
        {
            return servis.BrojNaDnevnomNivou(id);
        }

        [HttpPost]
        [Route("Prihodi")]
        public async Task<ActionResult<double>> Prihodi(PrihodiZaPeriod pp)
        {
            return servis.OdrediPrihodeZaPeriod(pp);
        }


    }
}