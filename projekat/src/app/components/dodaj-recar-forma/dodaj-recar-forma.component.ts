import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dodaj-recar-forma',
  templateUrl: './dodaj-recar-forma.component.html',
  styleUrls: ['./dodaj-recar-forma.component.css']
})
export class DodajRecarFormaComponent implements OnInit {

  //dodajRentCarForma: FormGroup;

  constructor(public service: RentACarService, private toastr: ToastrService) { }

  ngOnInit(): void {
   // this.initForm();
  }

  /*
  private initForm() {
    this.dodajRentCarForma = new FormGroup({
      'naziv': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'adresa': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
  }*/

  onClear() {
    this.service.formModel.reset();
  }

  /*
  onSubmit() {
    console.log(this.dodajRentCarForma.value);
    console.log(this.dodajRentCarForma);
  }*/
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
