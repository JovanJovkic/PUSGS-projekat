import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik-service/user.service';

@Component({
  selector: 'app-promeni-lozinku',
  templateUrl: './promeni-lozinku.component.html',
  styleUrls: ['./promeni-lozinku.component.css']
})
export class PromeniLozinkuComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  formModel = {
    StaraLozinka: '',
    NovaLozinka: ''
  }

  onSubmit(form: NgForm) {
    
    this.service.promeniLozinku(this.formModel.StaraLozinka,this.formModel.NovaLozinka).subscribe(
      (res: any) => {
        localStorage.setItem("sifraIzmenjena","true");
      },
      err => {
        /*
        if (err.status == 400)
        
          this.toastr.error('Incorrect username or password.', 'Authentication failed.', {
            timeOut: 8000,
           // positionClass: 'toast-top-left',
          });
        else
          console.log(err);*/
      }
    );
  }

}
