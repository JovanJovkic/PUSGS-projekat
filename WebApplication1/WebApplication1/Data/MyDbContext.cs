//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.EntityFrameworkCore;
//using WebApplication1.Models;

//namespace WebApplication1.Data
//{
//    public class MyDbContext : DbContext
//    {
//        public MyDbContext()
//        {
//        }

//        public MyDbContext(DbContextOptions<MyDbContext> options)
//            : base(options)
//        {
//        }

//        //protected override void OnModelCreating(ModelBuilder modelBuilder)
//        //{
//        //    modelBuilder.Entity<Vozilo>()
//        //        .Property(p => p.RowVersion)
//        //        .IsRowVersion();
//        //}

//        //public DbSet<Korisnik> Korisnici { get; set; }

//        //public DbSet<Vozilo> Vozila { get; set; }

//        //public DbSet<RentACarServis> RentACarServisi { get; set; }

//        //public DbSet<Destinacija> Destinacije { get; set; }

//        //public DbSet<AirCompany> AvioKompanije { get; set; }

//        //public DbSet<RezervacijaDestinacije> RezervacijeDestinacija { get; set; }

//        //public DbSet<Filijala> Filijale { get; set; }

//        //public DbSet<RezervacijaVozila> RezervacijeVozila { get; set; }

//        //public DbSet<BrzaRezervacijaVozila> BrzeRezervacijeVozila { get; set; }
//    }
//}
