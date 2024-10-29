import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito : any [] = [];

  constructor() { }

  setearCarrito(producto : any){
    // localStorage.setItem('cartItems',JSON.stringify(producto))
    this.carrito.push(producto);
    console.log("Carrito",this.carrito);
  }

  getCarrito() : any {
    return this.carrito
  }
}
