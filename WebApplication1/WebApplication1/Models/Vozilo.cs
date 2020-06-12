using Newtonsoft.Json;
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

        public int FilijalaID { get; set; }

        public double Ocena { get; set; }

        [NotMapped]
        public List<DateTime> ZauzetiDatumi { get; set; }

        public string ZauzetiDatumiString { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }

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
            else
            {
                ZauzetiDatumi = new List<DateTime>();
            }
        }
    }
}
