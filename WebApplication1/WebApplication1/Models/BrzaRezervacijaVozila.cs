using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class BrzaRezervacijaVozila
    {
        [Key]
        public int Id { get; set; }

        public int IdRentACar { get; set; }

        public int IdVozila { get; set; }

        public double NovaCena { get; set; }

        public double PocetnaCena { get; set; }

        public double Popust { get; set; }

        public bool Zavrseno { get; set; }

        public string IdKlijenta { get; set; }

        public DateTime PocetniDatum { get; set; }

        public DateTime KrajnjiDatum { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }
    }
}
