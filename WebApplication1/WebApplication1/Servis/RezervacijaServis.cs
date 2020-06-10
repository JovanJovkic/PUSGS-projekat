using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Servis
{
    public class RezervacijaServis
    {
        private readonly AuthenticationContext _context;

        public RezervacijaServis(AuthenticationContext context)
        {
            _context = context;
        }


        public double ukupnaCena(RezervacijaVozila rezervacija)
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

        //public double ukupnaCena(RezervacijaVozila rezervacija)
        //{
        //    DateTime pocetni = rezervacija.PocetniDatum;
        //    DateTime krajnji = rezervacija.KrajnjiDatum;

        //    RentACarServis rentACar = _context.RentACarServisi.Find(rezervacija.IdRentACar);

        //    double ukupnaCena = rentACar.cenaPrviDan;

        //    if (pocetni != krajnji)
        //    {
        //        TimeSpan ts = new TimeSpan(1, 0, 0, 0);

        //        while (pocetni != krajnji)
        //        {
        //            pocetni += ts;
        //            ukupnaCena += rentACar.cenaSledeciDan;
        //        }
        //    }

        //    return ukupnaCena;
        //}

        public  bool dodajDatumeVozilu(RezervacijaVozila rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            Vozilo vozilo = _context.Vozila.Find(rezervacija.IdVozila);
            //_context.Entry(vozilo).OriginalValues["RowVersion"] = rezervacija.Vozilo.RowVersion;
            //vozilo.RowVersion = rezervacija.Vozilo.RowVersion;
            //Vozilo vozilo = rezervacija.Vozilo;
            if (vozilo.RowVersion.Length != rezervacija.Vozilo.RowVersion.Length)
            {
                return false;
            }

            for (int i = 0; i < vozilo.RowVersion.Length; i++)
            {
                if(vozilo.RowVersion[i] != rezervacija.Vozilo.RowVersion[i])
                {
                    return false;
                }
            }


            if (pocetni != krajnji)
            {
                TimeSpan ts = new TimeSpan(1, 0, 0, 0);
                vozilo.PretvoriUListu();

                while (pocetni != krajnji)
                {
                    vozilo.ZauzetiDatumi.Add(pocetni);
                    pocetni += ts;
                }
            }

            vozilo.PretvoriUJson();

            _context.Entry(vozilo).State = EntityState.Modified;
            //DodajUBazuVozilo(vozilo);

            return true;
        }

        //public async Task DodajUBazuVozilo(Vozilo vozilo)
        //{
        //    _context.Entry(vozilo).State = EntityState.Modified;

        //    try
        //    {
        //        //await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException e)
        //    {
        //        //return false;
        //    }
        //}

        public Vozilo dodajDatumeVozilu(BrzaRezervacijaVozila rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            Vozilo vozilo = _context.Vozila.Find(rezervacija.IdVozila);

            if (pocetni != krajnji)
            {
                TimeSpan ts = new TimeSpan(1, 0, 0, 0);
                vozilo.PretvoriUListu();

                while (pocetni != krajnji)
                {
                    vozilo.ZauzetiDatumi.Add(pocetni);
                    pocetni += ts;
                }
            }

            vozilo.PretvoriUJson();

            _context.Entry(vozilo).State = EntityState.Modified;

            try
            {
               // _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {

            }

            return vozilo;
        }


    }
}
