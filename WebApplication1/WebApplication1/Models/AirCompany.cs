using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class AirCompany
    {
        [Key]

        public int Id { get; set; }

        public string NazivAvioKompanije { get; set; }

        public string GradAvioKompanije { get; set; }

        public string ProsecnaOcena { get; set; }

        public string Admin { get; set; }

        public ICollection<Destinacija> Destinacije { get; set; }
    }
}
