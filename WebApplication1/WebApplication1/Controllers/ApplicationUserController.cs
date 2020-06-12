using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Servis;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {

        private readonly AuthenticationContext _context;
        private UserManager<Korisnik> _userManager;
        private SignInManager<Korisnik> _signInManager;
        private readonly ApplicationSettings _appSettings;

        public ApplicationUserController(UserManager<Korisnik> userManager,
            SignInManager<Korisnik> signInManager, IOptions<ApplicationSettings> appSettings,AuthenticationContext c)
        {
            //userManager.Store = 
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
            _context = c;
        }

        [HttpPost]
        [Route("Register")]
        //POST : /api/ApplicationUser/Register
        public async Task<Object> Register(ApplicationUserModel model)
        {
            model.UserName = model.Email;
            var applicationUser = new Korisnik()
            {
                UserName = model.UserName,
                Email = model.Email,
                //FullName = model.FullName,
                Uloga = TipKorisnika.Registrovani,
                Ime = model.Ime,
                Prezime = model.Prezime,
                Grad = model.Grad,
                Telefon = model.Telefon,
                IzmenjenaLozinka = false
            };

            try
            {
                
                var result = await _userManager.CreateAsync(applicationUser, model.Lozinka);
                PosaljiMejlAsync(applicationUser);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpPost]
        [Route("Login")]
        //POST : /api/ApplicationUser/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                if (user.EmailConfirmed == false)
                {
                    return BadRequest(new { message = "Morate da aktivirate Vas nalog, link je poslat na Vas mejl." });
                }

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString()),
                        new Claim("Roles", user.Uloga.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                   // SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token, model.UserName, user.Uloga, user.IzmenjenaLozinka });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }

        [HttpPost]
        [Route("SocialLogin")]
        // POST: api/<controller>/Login
        public async Task<IActionResult> SocialLogin([FromBody]GoogleLogin loginModel)
        {
            var test = _appSettings.JWT_Secret;

            Korisnik userModel = new Korisnik();
            userModel.Email = loginModel.Email;
            userModel.Ime = loginModel.Ime;
            userModel.Prezime = loginModel.Prezime;
            userModel.Uloga = TipKorisnika.Registrovani;
            userModel.UserName = loginModel.Id;

            

            if (_userManager.FindByNameAsync(userModel.UserName).Result == null)
            {
                var result = await _userManager.CreateAsync(userModel);
            }

            if (VerifyToken(loginModel.IdToken))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Expires = DateTime.UtcNow.AddMinutes(5),
                    //Key min: 16 characters
                   // SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }

            return Ok();
        }
        private const string GoogleApiTokenInfoUrl = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={0}";

        public bool VerifyToken(string providerToken)
        {
            var httpClient = new HttpClient();
            var requestUri = new Uri(string.Format(GoogleApiTokenInfoUrl, providerToken));

            HttpResponseMessage httpResponseMessage;

            try
            {
                httpResponseMessage = httpClient.GetAsync(requestUri).Result;
            }
            catch (Exception ex)
            {
                return false;
            }

            if (httpResponseMessage.StatusCode != HttpStatusCode.OK)
            {
                return false;
            }

            var response = httpResponseMessage.Content.ReadAsStringAsync().Result;
            var googleApiTokenInfo = JsonConvert.DeserializeObject<GoogleApiTokenInfo>(response);

            return true;
        }

        [HttpPost]
        [Route("RegisterAdmin")]
        //POST : /api/ApplicationUser/RegisterAdmin
        public async Task<Object> RegisterAdmin(ApplicationUserModel model)
        {
            model.UserName = model.Email;
            var applicationUser = new Korisnik()
            {
                UserName = model.UserName,
                Email = model.Email,
                //FullName = model.FullName,
                //Uloga = TipKorisnika.Registrovani
                Ime = model.Ime,
                Prezime = model.Prezime,
                Grad = model.Grad,
                Telefon = model.Telefon
            };

            if(model.Uloga == "AdminAvioKompanije")
            {
                applicationUser.Uloga = TipKorisnika.AdminAvioKompanije;
            }
            else if(model.Uloga == "AdminRentACarServisa")
            {
                applicationUser.Uloga = TipKorisnika.AdminRentACarServisa;
            }
            else
            {
                applicationUser.Uloga = TipKorisnika.Administrator;
            }

            try
            {

                var result = await _userManager.CreateAsync(applicationUser, model.Lozinka);
                PosaljiMejlAsync(applicationUser);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpGet]
        [Route("GetAdminAvio")]
        public async Task<ActionResult<IEnumerable<Korisnik>>> GetAdminAvio()
        {
            List<Korisnik> lista = _userManager.Users.ToList();

            foreach (Korisnik item in lista.ToList())
            {
                if(item.Uloga!=TipKorisnika.AdminAvioKompanije)
                {
                    lista.Remove(item);
                }
            }

            return lista;
        }

        [HttpGet]
        [Route("GetAdminRent")]
        public async Task<ActionResult<IEnumerable<Korisnik>>> GetAdminRent()
        {
            List<Korisnik> lista = _userManager.Users.ToList();

            foreach (Korisnik item in lista.ToList())
            {
                if (item.Uloga != TipKorisnika.AdminRentACarServisa)
                {
                    lista.Remove(item);
                }
            }

            return lista;
        }


        public async void PosaljiMejlAsync(Korisnik k)
        {
            using (MailMessage mail = new MailMessage())
            {
                string code = await _userManager.GenerateEmailConfirmationTokenAsync(k);
                //string codeHtmlVersion = HttpUtility.UrlEncode(code);
              
                //string toMail = "https://localhost:44308/api/ApplicationUser/PotvrdiMejl?userId=" + k.Id + "&code=" + code;

                
              //  string s = Url.Link("PotvrdiMejl", new { userId = k.Id, codee = code });

             //   var callbackUrl = new Uri(Url.Link("https://localhost:44308/api/ApplicationUser/PotvrdiMejl", new { userId = k.Id, code = code }));

                string toMail = "https://localhost:44308/api/ApplicationUser/PotvrdiMejl/" + k.Id;

                mail.From = new MailAddress("webprojekatpusgs@gmail.com");
                mail.To.Add(k.Email);
                mail.Subject = "PUSGS projekat";
                mail.Body = "<h1>Da biste aktivirali Vas nalog, kliknite na sledeci link: </h1>";
                mail.Body += toMail;
                mail.IsBodyHtml = true;

                using (SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587))
                {
                    smtp.Credentials = new System.Net.NetworkCredential("webprojekatpusgs@gmail.com", "ftn500web");
                    smtp.EnableSsl = true;
                    smtp.Send(mail);
                }
            }
        }

        [HttpGet]
        [Route("PotvrdiMejl/{userId}")]
        public async void PotvrdiMejl(string userId)
        {
            
            List<Korisnik> lista = _userManager.Users.Where(user => user.Id == userId).ToList();

            //var result = _userManager.ConfirmEmailAsync(id, code);
            if(lista.Count>0)
            {
                Korisnik korisnik = lista[0];
                korisnik.EmailConfirmed = true;
                // _userManager.UpdateAsync(korisnik);

                try
                {
                    //string token =  _userManager.GenerateEmailConfirmationTokenAsync(korisnik).Result;
                    //var res = await _userManager.ConfirmEmailAsync(korisnik, token);
                    //await _userManager.UpdateAsync(korisnik);
                    //_context.Entry(korisnik).State = EntityState.Modified;
                    //await _context.SaveChangesAsync();
                    RentServis servis = new RentServis(_context);
                    servis.potvrdi(korisnik);
                }
                catch (Exception e)
                {

                    
                }
            }
        }

        [HttpPut]
        [Route("IzmeniSifru")]
        public void IzmeniSifru(IzmenaSifre izmena)
        {
            Korisnik user =  _userManager.FindByNameAsync(izmena.Email).Result;
            try
            {
                _userManager.ChangePasswordAsync(user, izmena.StaraSifra, izmena.NovaSifra);
                user.IzmenjenaLozinka = true;
                RentServis servis = new RentServis(_context);
                servis.potvrdi(user);
                //_userManager.UpdateAsync(user);
            }
            catch(Exception e)
            {

            }
        }

        [HttpGet]
        [Route("GetUser/{email}")]
        public Korisnik GetUser(string email)
        {
            Korisnik k = _userManager.FindByNameAsync(email).Result;

            return k;
        }

        [HttpPost]
        [Route("UpdateUser")]
        public Korisnik UpdateUser(Korisnik k)
        {
            RentServis servis = new RentServis(_context);
            servis.potvrdi(k);

            return k;
        }

        
    }
}