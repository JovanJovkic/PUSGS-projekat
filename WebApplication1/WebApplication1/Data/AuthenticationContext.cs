using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class AuthenticationContext : IdentityDbContext
    {
        public AuthenticationContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Korisnik> ApplicationUsers { get; set; }

        public DbSet<Vozilo> Vozila { get; set; }

        public DbSet<RentACarServis> RentACarServisi { get; set; }

        public DbSet<Destinacija> Destinacije { get; set; }

        public DbSet<AirCompany> AvioKompanije { get; set; }

        public DbSet<RezervacijaDestinacije> RezervacijeDestinacija { get; set; }

        public DbSet<BrzaRezervacijaDestinacija> BrzeRezervacijeDestinacije { get; set; }

        public DbSet<Filijala> Filijale { get; set; }

        public DbSet<RezervacijaVozila> RezervacijeVozila { get; set; }

        public DbSet<BrzaRezervacijaVozila> BrzeRezervacijeVozila { get; set; }
    }
}
