﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication1.Data;

namespace WebApplication1.Migrations
{
    [DbContext(typeof(MyDbContext))]
    partial class MyDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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

                    b.ToTable("Destinacije");
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

            modelBuilder.Entity("WebApplication1.Models.Vozilo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BrojSedista")
                        .HasColumnType("int");

                    b.Property<int>("GodinaProizvodnje")
                        .HasColumnType("int");

                    b.Property<string>("Marka")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Naziv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("RentACarServisId")
                        .HasColumnType("int");

                    b.Property<string>("TipVozila")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RentACarServisId");

                    b.ToTable("Vozila");
                });

            modelBuilder.Entity("WebApplication1.Models.Vozilo", b =>
                {
                    b.HasOne("WebApplication1.Models.RentACarServis", null)
                        .WithMany("Vozila")
                        .HasForeignKey("RentACarServisId");
                });
#pragma warning restore 612, 618
        }
    }
}
