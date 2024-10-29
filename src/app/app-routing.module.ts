import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AllProductsComponent } from './pages/all-products/all-products.component'; 
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MapaComponent } from './pages/mapa/mapa/mapa.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allProducts', component: AllProductsComponent }, 
  { path: 'carrito', component: CarritoComponent },
  {path: 'mapa', component: MapaComponent},
  {path: 'allProducts', component: AllProductsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
