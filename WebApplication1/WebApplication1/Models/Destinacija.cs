using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Destinacija
    {
        [Key]
        public int Id { get; set; }

        public string NazivDestinacije { get; set; }

        public string datumVremeSletanja { get; set; }

        public string datumVremePoletanja { get; set; }

        public string vremePutovanja { get; set; }

        public string duzinaPutovanja { get; set; }

        public int brojPresedanja { get; set; }

        public string lokacijaPresedanja { get; set; }

        public string cenaKarte { get; set; }
    }
}
