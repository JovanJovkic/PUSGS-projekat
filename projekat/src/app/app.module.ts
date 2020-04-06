import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijaFormaComponent } from './components/registracija-forma/registracija-forma.component';
import { PrijavaFormaComponent } from './components/prijava-forma/prijava-forma.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaFormaComponent,
    PrijavaFormaComponent
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
