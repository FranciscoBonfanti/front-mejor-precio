import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.cartItems = JSON.parse(savedItems);
    }
  }

  saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(item: any): void {
    const cartItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.saveCartItems();
  }

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

  totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout(): void {
    alert('Compra realizada con éxito!');
    this.cartItems = [];
    this.saveCartItems();
  }
}
