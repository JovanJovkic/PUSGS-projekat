export class Korisnik {
    email: string;
    lozinka: string;
    ime: string;
    prezime: string;
    grad: string;
    telefon: string;
    prijatelji: string;

    constructor(email: string, lozinka: string, ime: string, prezime: string,grad: string, telefon: string ,prijatelji: string) {
        this.email = email;
        this.lozinka = lozinka;
        this.ime = ime;
        this.prezime = prezime;
        this.grad = grad;
        this.telefon = telefon;
        this.prijatelji = prijatelji;
    }

}