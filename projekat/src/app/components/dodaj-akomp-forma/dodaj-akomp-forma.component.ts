import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dodaj-akomp-forma',
  templateUrl: './dodaj-akomp-forma.component.html',
  styleUrls: ['./dodaj-akomp-forma.component.css']
})
export class DodajAkompFormaComponent implements OnInit {

  public listItems: Array<string> = [];

  constructor(public service: AircompaniesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.initForm();
    this.ucitajAdmine();
   }

  onClear() {
    this.service.formModel.reset();
  }

  ucitajAdmine(){
    this.service.ucitajAdmineAvio().subscribe(
    (res: any) => {
      if (res != null) {

        console.log(res);

        res.forEach(element => {

          var s = element.userName;
          this.listItems.push(s);
          
        });
        
       
      } else {
        res.errors.forEach(element => {
          switch (element.code) {
            default:
              break;
          }
        });
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    
  );
}

onSubmit() {
  this.service.dodaj().subscribe(
  (res: any) => {
    console.log(res);
    if (res.id > 0) {
      this.service.formModel.reset();
      this.toastr.success('New rent-a-car servis created!', 'Registration successful.');
      console.log('Uspesno ste registrovali rent-a-car servis');
    } else {
      res.errors.forEach(element => {
        switch (element.code) {
          case 'DuplicateUserName':
            this.toastr.error('Username is already taken','Registration failed.');
            break;

          default:
          this.toastr.error(element.description,'Registration failed.');
            break;
        }
      });
    }
  },
  err => {
    console.log('greska');
    console.log(err);
  }
  
);
}


}
