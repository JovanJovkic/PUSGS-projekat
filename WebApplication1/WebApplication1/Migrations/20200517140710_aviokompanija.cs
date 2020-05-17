using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class aviokompanija : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Grad",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "Ime",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "Lozinka",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "Prezime",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "Telefon",
                table: "Korisnici");

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "Korisnici",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "AccessFailedCount",
                table: "Korisnici",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "Korisnici",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "EmailConfirmed",
                table: "Korisnici",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "LockoutEnabled",
                table: "Korisnici",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "LockoutEnd",
                table: "Korisnici",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedEmail",
                table: "Korisnici",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedUserName",
                table: "Korisnici",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PasswordHash",
                table: "Korisnici",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Korisnici",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "PhoneNumberConfirmed",
                table: "Korisnici",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "SecurityStamp",
                table: "Korisnici",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "TwoFactorEnabled",
                table: "Korisnici",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Korisnici",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AvioKompanije",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazivAvioKompanije = table.Column<string>(nullable: true),
                    GradAvioKompanije = table.Column<string>(nullable: true),
                    ProsecnaOcena = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvioKompanije", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AvioKompanije");

            migrationBuilder.DropColumn(
                name: "AccessFailedCount",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "EmailConfirmed",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "LockoutEnabled",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "LockoutEnd",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "NormalizedEmail",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "NormalizedUserName",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "PhoneNumberConfirmed",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "SecurityStamp",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "TwoFactorEnabled",
                table: "Korisnici");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Korisnici");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Korisnici",
                type: "int",
                nullable: false,
                oldClrType: typeof(string))
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "Grad",
                table: "Korisnici",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Ime",
                table: "Korisnici",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Lozinka",
                table: "Korisnici",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Prezime",
                table: "Korisnici",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Telefon",
                table: "Korisnici",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
