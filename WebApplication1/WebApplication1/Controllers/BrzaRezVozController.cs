﻿using System;
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
    public class BrzaRezVozController : ControllerBase
    {


        private readonly MyDbContext _context;
        private RezervacijaServis servis;

        public BrzaRezVozController(MyDbContext context)
        {
            _context = context;
            servis = new RezervacijaServis(_context);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BrzaRezervacijaVozila>>> GetBrzeRezervacijeVozila()
        {
            return await _context.BrzeRezervacijeVozila.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BrzaRezervacijaVozila>> GetBrzaRezervacijaVozila(int id)
        {
            var rezervacija = await _context.BrzeRezervacijeVozila.FindAsync(id);

            if (rezervacija == null)
            {
                return NotFound();
            }

            return rezervacija;
        }

        [HttpDelete]
        [Route("DeleteBrzaRezervacijaVozila/{id}")]
        public async Task<ActionResult<BrzaRezervacijaVozila>> DeleteBrzaRezervacijaVozila(int id)
        {
            var rezervacija = await _context.BrzeRezervacijeVozila.FindAsync(id);
            if (rezervacija == null)
            {
                return NotFound();
            }

            _context.BrzeRezervacijeVozila.Remove(rezervacija);
            await _context.SaveChangesAsync();

            return rezervacija;
        }

        private bool BrzaRezervacijaVozilaExists(int id)
        {
            return _context.BrzeRezervacijeVozila.Any(e => e.Id == id);
        }

        [HttpPost]
        [Route("AddBrzaRezervacijaVozila")]
        public async Task<ActionResult<BrzaRezervacijaVozila>> AddBrzaRezervacijaVozila(BrzaRezervacijaVozila rezervacija)
        {
            RentACarServis rentservis = _context.RentACarServisi.Find(rezervacija.IdRentACar);

            rezervacija.PocetnaCena = servis.ukupnaCena(rezervacija);
            rezervacija.NovaCena = rezervacija.PocetnaCena - rezervacija.PocetnaCena * rezervacija.Popust / 100;

            _context.BrzeRezervacijeVozila.Add(rezervacija);
            servis.dodajDatumeVozilu(rezervacija);

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
                if (!BrzaRezervacijaVozilaExists(rezervacija.Id))
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

        public double ukupnaCena(BrzaRezervacijaVozila rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            RentACarServis rentACar = _context.RentACarServisi.Find(rezervacija.IdRentACar);

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