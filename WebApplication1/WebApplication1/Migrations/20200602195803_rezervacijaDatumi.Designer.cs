﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication1.Data;

namespace WebApplication1.Migrations
{
    [DbContext(typeof(MyDbContext))]
    [Migration("20200602195803_rezervacijaDatumi")]
    partial class rezervacijaDatumi
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebApplication1.Models.AirCompany", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Admin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GradAvioKompanije")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NazivAvioKompanije")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProsecnaOcena")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("AvioKompanije");
                });

            modelBuilder.Entity("WebApplication1.Models.Destinacija", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AirCompanyID")
                        .HasColumnType("int");

                    b.Property<string>("NazivDestinacije")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("brojPresedanja")
                        .HasColumnType("int");

                    b.Property<string>("cenaKarte")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("datumVremePoletanja")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("datumVremeSletanja")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("duzinaPutovanja")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lokacijaPresedanja")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("vremePutovanja")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AirCompanyID");

                    b.ToTable("Destinacije");
                });

            modelBuilder.Entity("WebApplication1.Models.Filijala", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Broj")
                        .HasColumnType("int");

                    b.Property<string>("Mesto")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RentACarServisID")
                        .HasColumnType("int");

                    b.Property<string>("Ulica")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Filijale");
                });

            modelBuilder.Entity("WebApplication1.Models.RentACarServis", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Admin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Naziv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PromotivniOpis")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("RentACarServisi");
                });

            modelBuilder.Entity("WebApplication1.Models.RezervacijaVozila", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Cena")
                        .HasColumnType("float");

                    b.Property<string>("IdKlijenta")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdRentACar")
                        .HasColumnType("int");

                    b.Property<int>("IdVozila")
                        .HasColumnType("int");

                    b.Property<DateTime>("KrajnjiDatum")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("PocetniDatum")
                        .HasColumnType("datetime2");

                    b.Property<string>("ZauzetiDatumiString")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Zavrseno")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("RezervacijeVozila");
                });

            modelBuilder.Entity("WebApplication1.Models.Vozilo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BrojSedista")
                        .HasColumnType("int");

                    b.Property<int>("FilijalaID")
                        .HasColumnType("int");

                    b.Property<int>("GodinaProizvodnje")
                        .HasColumnType("int");

                    b.Property<string>("Marka")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Naziv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RentACarServisID")
                        .HasColumnType("int");

                    b.Property<string>("TipVozila")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ZauzetiDatumiString")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RentACarServisID");

                    b.ToTable("Vozila");
                });

            modelBuilder.Entity("WebApplication1.Models.Destinacija", b =>
                {
                    b.HasOne("WebApplication1.Models.AirCompany", null)
                        .WithMany("Destinacije")
                        .HasForeignKey("AirCompanyID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApplication1.Models.Vozilo", b =>
                {
                    b.HasOne("WebApplication1.Models.RentACarServis", null)
                        .WithMany("Vozila")
                        .HasForeignKey("RentACarServisID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
