using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Vozilo
    {
        [Key]
        public int Id { get; set; }

        public string Naziv { get; set; }

        public string Marka { get; set; }

        public string Model { get; set; }

        public int GodinaProizvodnje { get; set; }

        public int BrojSedista { get; set; }

        public string TipVozila { get; set; }

        public int RentACarServisID { get; set; }
    }
}
