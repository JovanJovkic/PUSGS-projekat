using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class brzarezervacijavozila : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BrzeRezervacijeVozila",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdRentACar = table.Column<int>(nullable: false),
                    IdVozila = table.Column<int>(nullable: false),
                    NovaCena = table.Column<double>(nullable: false),
                    PocetnaCena = table.Column<double>(nullable: false),
                    Popust = table.Column<double>(nullable: false),
                    Zavrseno = table.Column<bool>(nullable: false),
                    IdKlijenta = table.Column<string>(nullable: true),
                    PocetniDatum = table.Column<DateTime>(nullable: false),
                    KrajnjiDatum = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrzeRezervacijeVozila", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BrzeRezervacijeVozila");
        }
    }
}
