using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class filijala : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vozila_RentACarServisi_RentACarServisId",
                table: "Vozila");

            migrationBuilder.RenameColumn(
                name: "RentACarServisId",
                table: "Vozila",
                newName: "RentACarServisID");

            migrationBuilder.RenameIndex(
                name: "IX_Vozila_RentACarServisId",
                table: "Vozila",
                newName: "IX_Vozila_RentACarServisID");

            migrationBuilder.AlterColumn<int>(
                name: "RentACarServisID",
                table: "Vozila",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AirCompanyID",
                table: "Destinacije",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Filijale",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ulica = table.Column<string>(nullable: true),
                    Broj = table.Column<int>(nullable: false),
                    Mesto = table.Column<string>(nullable: true),
                    RentACarServisID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Filijale", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Destinacije_AirCompanyID",
                table: "Destinacije",
                column: "AirCompanyID");

            migrationBuilder.AddForeignKey(
                name: "FK_Destinacije_AvioKompanije_AirCompanyID",
                table: "Destinacije",
                column: "AirCompanyID",
                principalTable: "AvioKompanije",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vozila_RentACarServisi_RentACarServisID",
                table: "Vozila",
                column: "RentACarServisID",
                principalTable: "RentACarServisi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Destinacije_AvioKompanije_AirCompanyID",
                table: "Destinacije");

            migrationBuilder.DropForeignKey(
                name: "FK_Vozila_RentACarServisi_RentACarServisID",
                table: "Vozila");

            migrationBuilder.DropTable(
                name: "Filijale");

            migrationBuilder.DropIndex(
                name: "IX_Destinacije_AirCompanyID",
                table: "Destinacije");

            migrationBuilder.DropColumn(
                name: "AirCompanyID",
                table: "Destinacije");

            migrationBuilder.RenameColumn(
                name: "RentACarServisID",
                table: "Vozila",
                newName: "RentACarServisId");

            migrationBuilder.RenameIndex(
                name: "IX_Vozila_RentACarServisID",
                table: "Vozila",
                newName: "IX_Vozila_RentACarServisId");

            migrationBuilder.AlterColumn<int>(
                name: "RentACarServisId",
                table: "Vozila",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Vozila_RentACarServisi_RentACarServisId",
                table: "Vozila",
                column: "RentACarServisId",
                principalTable: "RentACarServisi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
