using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Servis
{
    public class AirCompanyServis
    {
        private readonly AuthenticationContext _context;

        public AirCompanyServis(AuthenticationContext context)
        {
            _context = context;
        }

        public bool DaLiMozeDaSeOdobri(int idAirCompany)
        {
            bool temp = true;

            AirCompany servis = _context.AvioKompanije.Find(idAirCompany);

            if (servis.cenaPrviDan == 0 || servis.cenaSledeciDan == 0)
            {
                temp = false;
            }

            return temp;
        }
    }
}
