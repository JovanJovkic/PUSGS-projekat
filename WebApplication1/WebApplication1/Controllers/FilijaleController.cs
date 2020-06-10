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
    public class FilijaleController : ControllerBase
    {
     
            private readonly AuthenticationContext _context;

            public FilijaleController(AuthenticationContext context)
            {
                _context = context;
            }

            [HttpGet]
            public async Task<ActionResult<IEnumerable<Filijala>>> GetFilijale()
            {
                return await _context.Filijale.ToListAsync();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<Filijala>> GetFilijala(int id)
            {
                var filijala = await _context.Filijale.FindAsync(id);

                if (filijala == null)
                {
                    return NotFound();
                }

                return filijala;
            }

            [HttpDelete]
            [Route("DeleteFilijala/{id}")]
            public async Task<ActionResult<Filijala>> DeleteFilijala(int id)
            {
                var filijala = await _context.Filijale.FindAsync(id);
                if (filijala == null)
                {
                    return NotFound();
                }

                _context.Filijale.Remove(filijala);
                await _context.SaveChangesAsync();

                return filijala;
            }

            private bool FilijalaExists(int id)
            {
                return _context.Filijale.Any(e => e.Id == id);
            }

            [HttpPost]
            [Route("AddFilijala")]
            public async Task<ActionResult<Filijala>> AddFilijala(Filijala filijala)
            {

                _context.Filijale.Add(filijala);

                await _context.SaveChangesAsync();

                return CreatedAtAction("GetFilijala", new { id = filijala.Id }, filijala);
            }

            [Route("UpdateFilijala")]
            public async Task<IActionResult> UpdateFilijala(Filijala filijala)
            {
                _context.Entry(filijala).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FilijalaExists(filijala.Id))
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
            [Route("GetFilijalaZaOdredjeniServis/{id}")]
            public async Task<ActionResult<IEnumerable<Filijala>>> GetFilijalaZaOdredjeniServis(int id)
            {
                List<Filijala> filijala = await _context.Filijale.Where(x => x.RentACarServisID == id).ToListAsync();

                if (filijala == null)
                {
                    return NotFound();
                }


                return filijala;
            }
        
    }
}