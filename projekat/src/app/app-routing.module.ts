import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrijavaFormaComponent } from './components/prijava-forma/prijava-forma.component';
import { RegistracijaFormaComponent } from './components/registracija-forma/registracija-forma.component';
import { AdminSistemProfilComponent } from './components/admin-sistem-profil/admin-sistem-profil.component';
import { DodajAkompFormaComponent } from './components/dodaj-akomp-forma/dodaj-akomp-forma.component';
import { DodajRecarFormaComponent } from './components/dodaj-recar-forma/dodaj-recar-forma.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/pocetna",
    pathMatch: 'full'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
