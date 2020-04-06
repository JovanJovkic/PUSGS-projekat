import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrijavaFormaComponent } from './components/prijava-forma/prijava-forma.component';
import { RegistracijaFormaComponent } from './components/registracija-forma/registracija-forma.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
