using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class cena : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "cenaPrviDan",
                table: "RentACarServisi",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "cenaSledeciDan",
                table: "RentACarServisi",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cenaPrviDan",
                table: "RentACarServisi");

            migrationBuilder.DropColumn(
                name: "cenaSledeciDan",
                table: "RentACarServisi");
        }
    }
}
