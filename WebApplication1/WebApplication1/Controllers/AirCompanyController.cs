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
    public class AirCompanyController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public AirCompanyController(AuthenticationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AirCompany>>> GetAviokompanije()
        {
            return await _context.AvioKompanije.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AirCompany>> GetAviokompanija(int id)
        {
            var aviokompanija = await _context.AvioKompanije.FindAsync(id);

            if (aviokompanija == null)
            {
                return NotFound();
            }

            return aviokompanija;
        }

        [HttpDelete]
        [Route("DeleteAviokompanija/{id}")]
        public async Task<ActionResult<AirCompany>> DeleteAviokompanija(int id)
        {
            var aviokompanije = await _context.AvioKompanije.FindAsync(id);
            if (aviokompanije == null)
            {
                return NotFound();
            }

            _context.AvioKompanije.Remove(aviokompanije);
            await _context.SaveChangesAsync();

            return aviokompanije;
        }


        [HttpPost]
        [Route("AddAviokompanija")]
        public async Task<ActionResult<AirCompany>> AddAviokompanija(AirCompany aviokompanija)
        {

            _context.AvioKompanije.Add(aviokompanija);

            await _context.SaveChangesAsync();

            var result = _context.Entry(aviokompanija).Entity;

            return Ok(result);

           // return CreatedAtAction("GetAviokompanija", new { id = aviokompanija.Id }, aviokompanija);
        }

        [Route("UpdateAviokompanija")]
        public async Task<IActionResult> UpdateAviokompanija(AirCompany aviokompanija)
        {
            _context.Entry(aviokompanija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AirCompanyExists(aviokompanija.Id))
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

        private bool AirCompanyExists(int id)
        {
            return _context.AvioKompanije.Any(e => e.Id == id);
        }
    }
}