import { Component } from '@angular/core';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems: any[] = [];

  constructor(private carritoService : CarritoService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  // Carga los elementos del carrito desde localStorage
  loadCartItems(): void {
    // const savedItems = localStorage.getItem('cartItems');
    // if (savedItems) {
    //   this.cartItems.push(JSON.parse(savedItems)) ;
    //   console.log(this.cartItems)
    // }
    this.cartItems = this.carritoService.getCarrito()
  }

  // Guarda los elementos del carrito en localStorage
  saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // Añade un producto al carrito o actualiza su cantidad si ya existe
  addToCart(item: any): void {
    const cartItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (cartItem) {
      cartItem.quantity += 1; 
    } else {
      this.cartItems.push({ ...item, quantity: 1 }); 
    }
    this.saveCartItems(); 
  }

  // Elimina un producto del carrito
  removeFromCart(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.saveCartItems(); 
  }

  updateQuantity(item: any, quantity: number): void {
    const cartItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (cartItem) {
      cartItem.quantity = quantity;
      if (cartItem.quantity <= 0) {
        this.removeFromCart(cartItem);
      } else {
        this.saveCartItems(); 
      }
    }
  }

  // Calcula el precio total del carrito
  totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Vacía el carrito y muestra una alerta de compra
  checkout(): void {
    alert('Compra realizada con éxito!');
    this.cartItems = [];
    this.saveCartItems(); 
  }
}
