using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class ocenaavio : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OcenaZaDestinaciju",
                table: "RezervacijeDestinacija",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OcenaZaKomapaniju",
                table: "RezervacijeDestinacija",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OcenaZaDestinaciju",
                table: "RezervacijeDestinacija");

            migrationBuilder.DropColumn(
                name: "OcenaZaKomapaniju",
                table: "RezervacijeDestinacija");
        }
    }
}
