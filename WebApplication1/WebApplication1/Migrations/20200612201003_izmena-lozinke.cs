using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class izmenalozinke : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IzmenjenaLozinka",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "BrzeRezervacijeDestinacije",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdAirCompany = table.Column<int>(nullable: false),
                    IdDestinacije = table.Column<int>(nullable: false),
                    NovaCena = table.Column<double>(nullable: false),
                    PocetnaCena = table.Column<double>(nullable: false),
                    Popust = table.Column<double>(nullable: false),
                    Zavrseno = table.Column<bool>(nullable: false),
                    IdKlijenta = table.Column<string>(nullable: true),
                    PocetniDatum = table.Column<DateTime>(nullable: false),
                    KrajnjiDatum = table.Column<DateTime>(nullable: false),
                    RowVersion = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrzeRezervacijeDestinacije", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BrzeRezervacijeDestinacije");

            migrationBuilder.DropColumn(
                name: "IzmenjenaLozinka",
                table: "AspNetUsers");
        }
    }
}
