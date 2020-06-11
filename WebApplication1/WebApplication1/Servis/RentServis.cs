using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Servis
{
    public class RentServis
    {
        private readonly AuthenticationContext _context;

        public RentServis(AuthenticationContext context)
        {
            _context = context;
        }

        public bool DaLiMozeDaSeOdobri(int idRentACar)
        {
            bool temp = true;

            RentACarServis servis = _context.RentACarServisi.Find(idRentACar);

            if(servis.cenaPrviDan == 0 || servis.cenaSledeciDan == 0)
            {
                temp = false;
            }

            return temp;
        }

        public void potvrdi(Korisnik k)
        {
            _context.Entry(k).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public List<int> BrojNaMesecnomNivou(int rentACarId)
        {
            List<RezervacijaVozila> lista = _context.RezervacijeVozila.ToList();

            foreach (RezervacijaVozila item in lista.ToList())
            {
                if(item.IdRentACar != rentACarId)
                {
                    lista.Remove(item);
                }
            }

            List<int> rezultat = new List<int>();

            for (int i = 0; i < 12; i++)
            {
                rezultat.Add(0);
            }

            foreach (RezervacijaVozila item in lista)
            {
                DateTime pocetni = item.PocetniDatum;
                DateTime krajnji = item.KrajnjiDatum;

                if (pocetni != krajnji)
                {
                    TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                    while (pocetni != krajnji)
                    {
                        rezultat[pocetni.Month - 1]++;
                        pocetni += ts;
                    }
                }

                rezultat[krajnji.Month - 1]++;
            }

            return rezultat;
        }

        public List<int> BrojNaNedeljnomNivou(int rentACarId)
        {
            List<RezervacijaVozila> lista = _context.RezervacijeVozila.ToList();

            foreach (RezervacijaVozila item in lista.ToList())
            {
                if (item.IdRentACar != rentACarId)
                {
                    lista.Remove(item);
                }
            }

            List<int> rezultat = new List<int>();

            for (int i = 0; i < 53; i++)
            {
                rezultat.Add(0);
            }

            var currentCulture = CultureInfo.CurrentCulture;


            foreach (RezervacijaVozila item in lista)
            {
                DateTime pocetni = item.PocetniDatum;
                DateTime krajnji = item.KrajnjiDatum;

                if (pocetni != krajnji)
                {
                    TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                    while (pocetni != krajnji)
                    {
                        int weekNo = currentCulture.Calendar.GetWeekOfYear(new DateTime(2013, 12, 31),
                                                                            currentCulture.DateTimeFormat.CalendarWeekRule,
                                                                            currentCulture.DateTimeFormat.FirstDayOfWeek);
                        rezultat[weekNo - 1]++;
                        pocetni += ts;
                    }
                }

                rezultat[krajnji.Month - 1]++;
            }

            return rezultat;
        }
    }
}
