using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class listaVozila : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RentACarServisId",
                table: "Vozila",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vozila_RentACarServisId",
                table: "Vozila",
                column: "RentACarServisId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vozila_RentACarServisi_RentACarServisId",
                table: "Vozila",
                column: "RentACarServisId",
                principalTable: "RentACarServisi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vozila_RentACarServisi_RentACarServisId",
                table: "Vozila");

            migrationBuilder.DropIndex(
                name: "IX_Vozila_RentACarServisId",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "RentACarServisId",
                table: "Vozila");
        }
    }
}
