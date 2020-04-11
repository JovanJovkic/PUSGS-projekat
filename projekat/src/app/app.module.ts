import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijaFormaComponent } from './components/registracija-forma/registracija-forma.component';
import { PrijavaFormaComponent } from './components/prijava-forma/prijava-forma.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminSistemProfilComponent } from './components/admin-sistem-profil/admin-sistem-profil.component';
import { DodajAkompFormaComponent } from './components/dodaj-akomp-forma/dodaj-akomp-forma.component';
import { DodajRecarFormaComponent } from './components/dodaj-recar-forma/dodaj-recar-forma.component';
import { AvioPocetnaComponent } from './components/avio-pocetna/avio-pocetna.component';
import { RentPocetnaComponent } from './components/rent-pocetna/rent-pocetna.component';
import { RentProfilComponent } from './components/rent-profil/rent-profil.component';
import { HomepageFormaComponent } from './components/homepage-forma/homepage-forma.component';
import { RentAdminProfilComponent } from './components/rent-admin-profil/rent-admin-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaFormaComponent,
    PrijavaFormaComponent,
    NavbarComponent,
    AdminSistemProfilComponent,
    DodajAkompFormaComponent,
    DodajRecarFormaComponent,
    AvioPocetnaComponent,
    RentPocetnaComponent,
    RentProfilComponent,
    HomepageFormaComponent,
    RentAdminProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
