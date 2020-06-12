using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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

        public ICollection<Vozilo> Vozila { get; set; }

        public double cenaPrviDan { get; set; }

        public double cenaSledeciDan { get; set; }

        public bool Odobreno { get; set; }

        public double Ocena { get; set; }

        //[NotMapped]
        //public List<DateTime> ZauzetiDatumi { get; set; }

        //public string ZauzetiDatumiString { get; set; }

        //public void PretvoriUJson()
        //{
        //    string output = JsonConvert.SerializeObject(ZauzetiDatumi);
        //    ZauzetiDatumiString = output;
        //}

        //public void PretvoriUListu()
        //{
        //    if (ZauzetiDatumiString != null)
        //    {
        //        List<DateTime> deserializedProduct = JsonConvert.DeserializeObject<List<DateTime>>(ZauzetiDatumiString);
        //        ZauzetiDatumi = deserializedProduct;
        //    }
        //}
    }
}
