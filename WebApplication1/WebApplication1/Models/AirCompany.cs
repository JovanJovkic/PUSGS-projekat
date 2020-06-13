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

        //public string GradAvioKompanije { get; set; }

        //public string ProsecnaOcena { get; set; }

        public string Admin { get; set; }

        public ICollection<Destinacija> Destinacije { get; set; }

        public string Adresa { get; set; }

        public string PromotivniOpis { get; set; }

        public string DestNaKojimPosluje { get; set; }

        public string Letovi { get; set; }

        public string SpisakKarataSaPopustomZaBrzuRez { get; set; }

        public string KonfigSegMesta { get; set; }

        public string Cenovnik { get; set; }

        public string InfoPrtljag { get; set; }

        public double cenaPrviDan { get; set; }

        public double cenaSledeciDan { get; set; }

        public bool Odobreno { get; set; }
    }
}
