﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext()
        {
        }

        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }

        //public DbSet<Korisnik> Korisnici { get; set; }

        public DbSet<Vozilo> Vozila { get; set; }

        public DbSet<RentACarServis> RentACarServisi { get; set; }

        public DbSet<Destinacija> Destinacije { get; set; }

         public DbSet<AirCompany> AvioKompanije { get; set; }

        public DbSet<Filijala> Filijale { get; set; }
    }
}
