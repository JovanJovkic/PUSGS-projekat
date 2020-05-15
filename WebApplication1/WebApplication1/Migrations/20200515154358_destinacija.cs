using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class destinacija : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Destinacije",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazivDestinacije = table.Column<string>(nullable: true),
                    datumVremeSletanja = table.Column<string>(nullable: true),
                    datumVremePoletanja = table.Column<string>(nullable: true),
                    vremePutovanja = table.Column<string>(nullable: true),
                    duzinaPutovanja = table.Column<string>(nullable: true),
                    brojPresedanja = table.Column<int>(nullable: false),
                    lokacijaPresedanja = table.Column<string>(nullable: true),
                    cenaKarte = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinacije", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Destinacije");
        }
    }
}
