using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public enum TipKorisnika
    {
        Neregistrovani,
        Registrovani,
        AdminAvioKompanije,
        AdminRentACarServisa,
        Administrator
    }

    public class Korisnik : IdentityUser
    {
        //[Key]
        //public int Id { get; set; }

        //public string Email { get; set; }

        //public string Lozinka { get; set; }

        public string Ime { get; set; }

        public string Prezime { get; set; }

        public string Grad { get; set; }

        public string Telefon { get; set; }

        public TipKorisnika Uloga { get; set; }

        public bool IzmenjenaLozinka { get; set; }
    }
}
