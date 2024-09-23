import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
