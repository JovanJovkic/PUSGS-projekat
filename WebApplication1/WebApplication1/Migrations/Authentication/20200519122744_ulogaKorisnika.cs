using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations.Authentication
{
    public partial class ulogaKorisnika : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Uloga",
                table: "AspNetUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Uloga",
                table: "AspNetUsers");
        }
    }
}
