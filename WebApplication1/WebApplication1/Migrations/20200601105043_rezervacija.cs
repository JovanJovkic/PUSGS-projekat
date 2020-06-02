using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class rezervacija : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ZauzetiDatumiString",
                table: "RentACarServisi");

            migrationBuilder.AddColumn<string>(
                name: "ZauzetiDatumiString",
                table: "Vozila",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "RezervacijeVozila",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdRentACar = table.Column<int>(nullable: false),
                    IdVozila = table.Column<int>(nullable: false),
                    Cena = table.Column<double>(nullable: false),
                    Zavrseno = table.Column<bool>(nullable: false),
                    IdKlijenta = table.Column<string>(nullable: true),
                    ZauzetiDatumiString = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RezervacijeVozila", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RezervacijeVozila");

            migrationBuilder.DropColumn(
                name: "ZauzetiDatumiString",
                table: "Vozila");

            migrationBuilder.AddColumn<string>(
                name: "ZauzetiDatumiString",
                table: "RentACarServisi",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
