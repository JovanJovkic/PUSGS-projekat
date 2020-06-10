using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Servis
{
    public class RentServis
    {
        private readonly AuthenticationContext _context;

        public RentServis(AuthenticationContext context)
        {
            _context = context;
        }

        public bool DaLiMozeDaSeOdobri(int idRentACar)
        {
            bool temp = true;

            RentACarServis servis = _context.RentACarServisi.Find(idRentACar);

            if(servis.cenaPrviDan == 0 || servis.cenaSledeciDan == 0)
            {
                temp = false;
            }

            return temp;
        }

        public void potvrdi(Korisnik k)
        {
            _context.Entry(k).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
