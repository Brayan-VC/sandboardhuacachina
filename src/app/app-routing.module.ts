import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
