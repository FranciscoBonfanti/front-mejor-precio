import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems: Array<any> = [];
  product:Array<any> =[];

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      this.cartItems.push({ ...product, quantity: 1 }); 
    }
  }

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.name !== item.name);
  }

  totalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  checkout() {
    alert('Procediendo al pago...');
  }

  ngOnInit(): void {
    if (history.state.product) {
      this.product.push(history.state.product); 
    }
  }

}
