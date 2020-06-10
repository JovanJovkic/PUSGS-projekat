using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class rezervacijaDestinacija : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                table: "Destinacije",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ZauzetiDatumiString",
                table: "Destinacije",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Odobreno",
                table: "AvioKompanije",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<double>(
                name: "cenaPrviDan",
                table: "AvioKompanije",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "cenaSledeciDan",
                table: "AvioKompanije",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "RezervacijeDestinacija",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdAirCompany = table.Column<int>(nullable: false),
                    IdDestinacije = table.Column<int>(nullable: false),
                    Cena = table.Column<double>(nullable: false),
                    Zavrseno = table.Column<bool>(nullable: false),
                    IdKlijenta = table.Column<string>(nullable: true),
                    PocetniDatum = table.Column<DateTime>(nullable: false),
                    KrajnjiDatum = table.Column<DateTime>(nullable: false),
                    ZauzetiDatumiString = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RezervacijeDestinacija", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RezervacijeDestinacija");

            migrationBuilder.DropColumn(
                name: "RowVersion",
                table: "Destinacije");

            migrationBuilder.DropColumn(
                name: "ZauzetiDatumiString",
                table: "Destinacije");

            migrationBuilder.DropColumn(
                name: "Odobreno",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "cenaPrviDan",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "cenaSledeciDan",
                table: "AvioKompanije");
        }
    }
}
