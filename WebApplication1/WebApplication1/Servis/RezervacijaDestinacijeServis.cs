using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Servis
{
    public class RezervacijaDestinacijeServis
    {
        private readonly AuthenticationContext _context;

        public RezervacijaDestinacijeServis(AuthenticationContext context)
        {
            _context = context;
        }


        public double ukupnaCena(RezervacijaDestinacije rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            RentACarServis rentACar = _context.RentACarServisi.Find(rezervacija.IdAirCompany);

            double ukupnaCena = rentACar.cenaPrviDan;

            if (pocetni != krajnji)
            {
                TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                while (pocetni != krajnji)
                {
                    pocetni += ts;
                    ukupnaCena += rentACar.cenaSledeciDan;
                }
            }

            return ukupnaCena;
        }

        public double ukupnaCena(BrzaRezervacijaVozila rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            RentACarServis rentACar = _context.RentACarServisi.Find(rezervacija.IdRentACar);

            double ukupnaCena = rentACar.cenaPrviDan;

            if (pocetni != krajnji)
            {
                TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                while (pocetni != krajnji)
                {
                    pocetni += ts;
                    ukupnaCena += rentACar.cenaSledeciDan;
                }
            }

            return ukupnaCena;
        }


        public bool dodajDatumeDestinaciji(RezervacijaDestinacije rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            Destinacija destinacija = _context.Destinacije.Find(rezervacija.IdDestinacije);
            if (destinacija.RowVersion.Length != rezervacija.Destinacija.RowVersion.Length)
            {
                return false;
            }

            for (int i = 0; i < destinacija.RowVersion.Length; i++)
            {
                if (destinacija.RowVersion[i] != rezervacija.Destinacija.RowVersion[i])
                {
                    return false;
                }
            }


            if (pocetni != krajnji)
            {
                TimeSpan ts = new TimeSpan(1, 0, 0, 0);
                destinacija.PretvoriUListu();

                while (pocetni != krajnji)
                {
                    destinacija.ZauzetiDatumi.Add(pocetni);
                    pocetni += ts;
                }
            }

            destinacija.PretvoriUJson();

            _context.Entry(destinacija).State = EntityState.Modified;

            return true;
        }

        public Destinacija dodajDatumeDestinaciji(BrzaRezervacijaVozila rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            Destinacija destinacija = _context.Destinacije.Find(rezervacija);

            if (pocetni != krajnji)
            {
                TimeSpan ts = new TimeSpan(1, 0, 0, 0);
                destinacija.PretvoriUListu();

                while (pocetni != krajnji)
                {
                    destinacija.ZauzetiDatumi.Add(pocetni);
                    pocetni += ts;
                }
            }

            destinacija.PretvoriUJson();

            _context.Entry(destinacija).State = EntityState.Modified;

            try
            {
                // _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {

            }

            return destinacija;
        }
    }
}
