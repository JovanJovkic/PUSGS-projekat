using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class aircompany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GradAvioKompanije",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "ProsecnaOcena",
                table: "AvioKompanije");

            migrationBuilder.AddColumn<string>(
                name: "Adresa",
                table: "AvioKompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cenovnik",
                table: "AvioKompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DestNaKojimPosluje",
                table: "AvioKompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InfoPrtljag",
                table: "AvioKompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "KonfigSegMesta",
                table: "AvioKompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Letovi",
                table: "AvioKompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PromotivniOpis",
                table: "AvioKompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpisakKarataSaPopustomZaBrzuRez",
                table: "AvioKompanije",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Adresa",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "Cenovnik",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "DestNaKojimPosluje",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "InfoPrtljag",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "KonfigSegMesta",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "Letovi",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "PromotivniOpis",
                table: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "SpisakKarataSaPopustomZaBrzuRez",
                table: "AvioKompanije");

            migrationBuilder.AddColumn<string>(
                name: "GradAvioKompanije",
                table: "AvioKompanije",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProsecnaOcena",
                table: "AvioKompanije",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
