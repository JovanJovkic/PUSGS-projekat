using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentACarServisController : ControllerBase
    {
        private readonly MyDbContext _context;

        public RentACarServisController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentACarServis>>> GetRentACarServisi()
        {
            //_context.RentACarServisi.Include("Vozila").ToList();
            return await _context.RentACarServisi.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RentACarServis>> GetRentACarServis(int id)
        {
            var servis = await _context.RentACarServisi.FindAsync(id);

            if (servis == null)
            {
                return NotFound();
            }

            return servis;
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

       
    }
}