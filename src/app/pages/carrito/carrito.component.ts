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
    // Cargar los items guardados en el localStorage al iniciar
    this.loadCartItems();
  }

  loadCartItems(): void {
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.cartItems = JSON.parse(savedItems);
    }
  }

  saveCartItems(): void {
    // Guardar los items en el localStorage cada vez que se actualicen
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(item: any): void {
    // Aquí se podría recibir un item y agregarlo al carrito
    this.cartItems.push(item);
    this.saveCartItems(); // Guardar en localStorage después de agregar un producto
  }

  removeFromCart(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.saveCartItems(); // Guardar en localStorage después de eliminar un producto
  }

  totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout(): void {
    // Aquí iría la lógica para proceder al pago
    // Puedes vaciar el carrito después de finalizar la compra si lo deseas.
  }
}
