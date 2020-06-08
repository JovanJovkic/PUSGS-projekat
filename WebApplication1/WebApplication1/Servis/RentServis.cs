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
        private readonly MyDbContext _context;

        public RentServis(MyDbContext context)
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
    }
}
