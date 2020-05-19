using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class adminrent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Admin",
                table: "RentACarServisi",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Admin",
                table: "AvioKompanije",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Admin",
                table: "RentACarServisi");

            migrationBuilder.DropColumn(
                name: "Admin",
                table: "AvioKompanije");
        }
    }
}
