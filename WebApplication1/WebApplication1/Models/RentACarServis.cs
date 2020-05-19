using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class RentACarServis
    {
        [Key]
        public int Id { get; set; }

        public string Naziv { get; set; }

        public string Adresa { get; set; }

        public string PromotivniOpis { get; set; }

        public string Admin { get; set; }
    }
}
