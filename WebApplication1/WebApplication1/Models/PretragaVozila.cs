using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class PretragaVozila
    {
        public string MestoPreuzimanja { get; set; }

        public DateTime DatumPreuzimanja { get; set; }

        public string MestoVracanja { get; set; }

        public DateTime DatumVracanja { get; set; }

        public string TipVozila { get; set; }

        public int BrojPutnika { get; set; }

        public int CenaOd { get; set; }

        public int CenaDo { get; set; }

        public int IdRentACar { get; set; }
    }
}
