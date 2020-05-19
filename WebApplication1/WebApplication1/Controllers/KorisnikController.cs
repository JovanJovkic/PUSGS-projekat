using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

//namespace WebApplication1.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class KorisnikController : ControllerBase
//    {
//        private readonly MyDbContext _context;

//        public KorisnikController(MyDbContext context)
//        {
//            _context = context;
//        }

//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<Korisnik>>> GetKorisnici()
//        {
//            return await _context.Korisnici.ToListAsync();
//        }

//        [HttpGet("{id}")]
//        public async Task<ActionResult<Korisnik>> GetKorisnik(int id)
//        {
//            var korisnik = await _context.Korisnici.FindAsync(id);

//            if (korisnik == null)
//            {
//                return NotFound();
//            }

//            return korisnik;
//        }

//        [HttpDelete]
//        [Route("DeleteKorisnik/{id}")]
//        public async Task<ActionResult<Korisnik>> DeleteKorisnik(int id)
//        {
//            var korisnici = await _context.Korisnici.FindAsync(id);
//            if (korisnici == null)
//            {
//                return NotFound();
//            }

//            _context.Korisnici.Remove(korisnici);
//            await _context.SaveChangesAsync();

//            return korisnici;
//        }

//        private bool KorisnikExists(string id)
//        {
//            return _context.Korisnici.Any(e => e.Id == id);
//        }

//        [HttpPost]
//        [Route("AddKorisnik")]
//        public async Task<ActionResult<Korisnik>> AddKorisnik(Korisnik korisnik)
//        {

//            _context.Korisnici.Add(korisnik);

//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetKorisnik", new { id = korisnik.Id }, korisnik);
//        }

//        [Route("UpdateKorisnik")]
//        public async Task<IActionResult> UpdateKorisnik(Korisnik korisnik)
//        {
//            _context.Entry(korisnik).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!KorisnikExists(korisnik.Id))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return NoContent();
//        }
//    }
//}