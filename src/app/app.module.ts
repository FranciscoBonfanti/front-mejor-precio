import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NabVarComponent } from './shared/nab-var/nab-var.component';
import { SideVarComponent } from './shared/side-var/side-var.component';
import { CarouselComponent } from './layout/banner/banner.component';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { AllComerciosComponent } from './layout/all-comercios/all-comercios.component';
import { CardProdComponent } from './shared/card-prod/card-prod.component';
import { PopupProdComponent } from './layout/popup-prod/popup-prod.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MapaComponent } from './pages/mapa/mapa/mapa.component';

// import { BrowserModule } from '@angular/platform-browser';
// import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NabVarComponent,
    SideVarComponent,
    CarouselComponent,
    CardComponent,
    FooterComponent,
    AllProductsComponent,
    AllComerciosComponent,
    CardProdComponent,
    PopupProdComponent,
    CarritoComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, 
    MatDialogModule,
    // BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
