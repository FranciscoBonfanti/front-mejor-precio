import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrls: ['./card-prod.component.css']
})
export class CardProdComponent {
  products = [
    { name: 'Perfume Dior', description: 'Perfume Dior Importado', price: 20, stock: 10, imageUrl: '../../../assets/perfumes.png', quantity: 1 },
    { name: 'Zapatillas', description: 'Zapatillas deportivas', price: 50, stock: 5, imageUrl: '../../../assets/zapatillas.png', quantity: 1 },
    { name: 'Anillo y Cadenita', description: 'Joyería fina en plata', price: 100, stock: 2, imageUrl: '../../../assets/joyeria.png', quantity: 1 },
    { name: 'Alimentos', description: 'Alimentos orgánicos', price: 5, stock: 0, imageUrl: '../../../assets/alimentos.png', quantity: 1 }
  ];

  selectedProduct: any = null; 
  cartItems: any[] = [];

  constructor(private dialog: MatDialog) {
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

  openPopup(product: any) {
    this.selectedProduct = product; 
  }

  closePopup() {
    this.selectedProduct = null; 
  }


  addToCart(product: any, quantity: number): void {
    const cartItem = this.cartItems.find(item => item.name === product.name);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      this.cartItems.push({ ...product, quantity });
    }
    this.saveCartItems();
  }
}
