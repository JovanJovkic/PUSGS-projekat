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
    [DbContext(typeof(AuthenticationContext))]
    [Migration("20200613150616_ocena-avio")]
    partial class ocenaavio
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");

                    b.HasDiscriminator<string>("Discriminator").HasValue("IdentityUser");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(128)")
                        .HasMaxLength(128);

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(128)")
                        .HasMaxLength(128);

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(128)")
                        .HasMaxLength(128);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(128)")
                        .HasMaxLength(128);

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("WebApplication1.Models.AirCompany", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Admin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cenovnik")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DestNaKojimPosluje")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InfoPrtljag")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KonfigSegMesta")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Letovi")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NazivAvioKompanije")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Odobreno")
                        .HasColumnType("bit");

                    b.Property<string>("PromotivniOpis")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SpisakKarataSaPopustomZaBrzuRez")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("cenaPrviDan")
                        .HasColumnType("float");

                    b.Property<double>("cenaSledeciDan")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("AvioKompanije");
                });

            modelBuilder.Entity("WebApplication1.Models.BrzaRezervacijaDestinacija", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("IdAirCompany")
                        .HasColumnType("int");

                    b.Property<int>("IdDestinacije")
                        .HasColumnType("int");

                    b.Property<string>("IdKlijenta")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("KrajnjiDatum")
                        .HasColumnType("datetime2");

                    b.Property<double>("NovaCena")
                        .HasColumnType("float");

                    b.Property<double>("PocetnaCena")
                        .HasColumnType("float");

                    b.Property<DateTime>("PocetniDatum")
                        .HasColumnType("datetime2");

                    b.Property<double>("Popust")
                        .HasColumnType("float");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("rowversion");

                    b.Property<bool>("Zavrseno")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("BrzeRezervacijeDestinacije");
                });

            modelBuilder.Entity("WebApplication1.Models.BrzaRezervacijaVozila", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("IdKlijenta")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdRentACar")
                        .HasColumnType("int");

                    b.Property<int>("IdVozila")
                        .HasColumnType("int");

                    b.Property<DateTime>("KrajnjiDatum")
                        .HasColumnType("datetime2");

                    b.Property<double>("NovaCena")
                        .HasColumnType("float");

                    b.Property<double>("PocetnaCena")
                        .HasColumnType("float");

                    b.Property<DateTime>("PocetniDatum")
                        .HasColumnType("datetime2");

                    b.Property<double>("Popust")
                        .HasColumnType("float");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("rowversion");

                    b.Property<bool>("Zavrseno")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("BrzeRezervacijeVozila");
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

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("rowversion");

                    b.Property<string>("ZauzetiDatumiString")
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

                    b.Property<double>("Ocena")
                        .HasColumnType("float");

                    b.Property<bool>("Odobreno")
                        .HasColumnType("bit");

                    b.Property<string>("PromotivniOpis")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("cenaPrviDan")
                        .HasColumnType("float");

                    b.Property<double>("cenaSledeciDan")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("RentACarServisi");
                });

            modelBuilder.Entity("WebApplication1.Models.RezervacijaDestinacije", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Cena")
                        .HasColumnType("float");

                    b.Property<int>("IdAirCompany")
                        .HasColumnType("int");

                    b.Property<int>("IdDestinacije")
                        .HasColumnType("int");

                    b.Property<string>("IdKlijenta")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("KrajnjiDatum")
                        .HasColumnType("datetime2");

                    b.Property<int>("OcenaZaDestinaciju")
                        .HasColumnType("int");

                    b.Property<int>("OcenaZaKomapaniju")
                        .HasColumnType("int");

                    b.Property<DateTime>("PocetniDatum")
                        .HasColumnType("datetime2");

                    b.Property<string>("ZauzetiDatumiString")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Zavrseno")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("RezervacijeDestinacija");
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

                    b.Property<int>("OcenaZaRentACar")
                        .HasColumnType("int");

                    b.Property<int>("OcenaZaVozilo")
                        .HasColumnType("int");

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

                    b.Property<double>("Ocena")
                        .HasColumnType("float");

                    b.Property<int>("RentACarServisID")
                        .HasColumnType("int");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("rowversion");

                    b.Property<string>("TipVozila")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ZauzetiDatumiString")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RentACarServisID");

                    b.ToTable("Vozila");
                });

            modelBuilder.Entity("WebApplication1.Models.Korisnik", b =>
                {
                    b.HasBaseType("Microsoft.AspNetCore.Identity.IdentityUser");

                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IzmenjenaLozinka")
                        .HasColumnType("bit");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefon")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Uloga")
                        .HasColumnType("int");

                    b.HasDiscriminator().HasValue("Korisnik");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
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
