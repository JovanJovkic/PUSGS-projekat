using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class RezervacijaDestinacije
    {
        [Key]
        public int Id { get; set; }

        public int IdAirCompany { get; set; }

        public int IdDestinacije { get; set; }

        public double Cena { get; set; }

        public bool Zavrseno { get; set; }

        public string IdKlijenta { get; set; }

        public DateTime PocetniDatum { get; set; }

        public DateTime KrajnjiDatum { get; set; }

        public int OcenaZaKomapaniju { get; set; }
        public int OcenaZaDestinaciju { get; set; }

        [NotMapped]
        public List<DateTime> ZauzetiDatumi { get; set; }

        public string ZauzetiDatumiString { get; set; }

        [NotMapped]
        public Destinacija Destinacija { get; set; }


        public void PretvoriUJson()
        {
            string output = JsonConvert.SerializeObject(ZauzetiDatumi);
            ZauzetiDatumiString = output;
        }

        public void PretvoriUListu()
        {
            if (ZauzetiDatumiString != null)
            {
                List<DateTime> deserializedProduct = JsonConvert.DeserializeObject<List<DateTime>>(ZauzetiDatumiString);
                ZauzetiDatumi = deserializedProduct;
            }
        }
    }
}
