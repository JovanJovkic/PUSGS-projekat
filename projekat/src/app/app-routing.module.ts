import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrijavaFormaComponent } from './components/prijava-forma/prijava-forma.component';
import { RegistracijaFormaComponent } from './components/registracija-forma/registracija-forma.component';
import { AdminSistemProfilComponent } from './components/admin-sistem-profil/admin-sistem-profil.component';
import { DodajAkompFormaComponent } from './components/dodaj-akomp-forma/dodaj-akomp-forma.component';
import { DodajRecarFormaComponent } from './components/dodaj-recar-forma/dodaj-recar-forma.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AvioPocetnaComponent} from './components/avio-pocetna/avio-pocetna.component';
import { RentPocetnaComponent} from './components/rent-pocetna/rent-pocetna.component';
import { RentProfilComponent} from './components/rent-profil/rent-profil.component';
import { HomepageFormaComponent } from './components/homepage-forma/homepage-forma.component';
import { RentAdminProfilComponent } from './components/rent-admin-profil/rent-admin-profil.component';
import {AviokompanijePocetnaComponent} from './components/aviokompanije-pocetna/aviokompanije-pocetna.component'
import {ProfilKorisnikaComponent} from './components/profil-korisnika/profil-korisnika.component'
import {AviokompAdminProfilComponent} from './components/aviokomp-admin-profil/aviokomp-admin-profil.component'
import { AvioProfilComponent} from './components/avio-profil/avio-profil.component';
import { AppComponent } from './app.component';
import { RegistracijaAdminComponent } from './components/registracija-admin/registracija-admin.component';
import { RentIzvestajComponent } from './components/rent-izvestaj/rent-izvestaj.component';


const routes: Routes = [
  {
    path: "pocetna",
    component: NavbarComponent
  },
  {
    path: "prijava",
    component: PrijavaFormaComponent
  },
  {
    path: "registracija",
    component: RegistracijaFormaComponent
  },
  {
    path: "registracijaAdmin",
    component: RegistracijaAdminComponent
  },
  {
    path: "pocetna",
    component: AppComponent
  },
  {
    path: "profil",
    component: AdminSistemProfilComponent
  },
  {
    path: "admin-avio",
    component: DodajAkompFormaComponent
  },
  {
    path: "admin-rent",
    component: DodajRecarFormaComponent
  },
  {
    path: "avio",
    component: AvioPocetnaComponent
  },
  {
    path: "ren-a-car",
    children: [
      { path: "", component: RentPocetnaComponent },
      { path: ":id/detalji", component: RentProfilComponent },
    ]
  },
  {
    path: "homepage-forma",
    children:[
      { path: "", component: HomepageFormaComponent},
      { path: "profilKorisnika", component: ProfilKorisnikaComponent},
      { path: "avio-kompanija-pocetna", component: AviokompanijePocetnaComponent},
      { path: "ren-a-car", component: RentPocetnaComponent},
      ]
  },
  {
    path: "profilRent",
   // component: RentAdminProfilComponent,
   children: [
    { path: "", component: RentAdminProfilComponent },
    { path: ":id/izvestaj", component: RentIzvestajComponent },
  ]
  },
  {
    path: "avio-kompanija-pocetna",
    children: [
      { path: "", component: AviokompanijePocetnaComponent },
      { path: ":id/profilKompanije", component: AvioProfilComponent },
    ]
  },
  {
    path: "profilAdminAvio",
    children:[
      { path: "", component: AviokompAdminProfilComponent},
      { path: "profilKorisnika", component: ProfilKorisnikaComponent},
      { path: "avio", component: AvioPocetnaComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
