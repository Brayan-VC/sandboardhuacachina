import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

import { HomeComponent } from './pages/home/home.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    PromocionesComponent,
    ContactanosComponent,
    NosotrosComponent,
    GaleriaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
