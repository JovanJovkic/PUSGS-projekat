using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class ocenarent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Ocena",
                table: "Vozila",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "OcenaZaRentACar",
                table: "RezervacijeVozila",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OcenaZaVozilo",
                table: "RezervacijeVozila",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "Ocena",
                table: "RentACarServisi",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ocena",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "OcenaZaRentACar",
                table: "RezervacijeVozila");

            migrationBuilder.DropColumn(
                name: "OcenaZaVozilo",
                table: "RezervacijeVozila");

            migrationBuilder.DropColumn(
                name: "Ocena",
                table: "RentACarServisi");
        }
    }
}
