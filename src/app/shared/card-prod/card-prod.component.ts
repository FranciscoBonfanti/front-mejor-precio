import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrls: ['./card-prod.component.css']
})
export class CardProdComponent {
  products = [
    { name: 'Perfume Dior',
      description: 'Perfume Dior Importado',
      price: 189999,
      stock: 10,
      imageUrl: '../../../assets/perfumes.png',
      quantity: 1,
      discountPrice: 165299,
      discount: '13%',
      installment: 4703,
      category: 'Perfumes',
      freeShipping: true },
    { name: 'Zapatillas',
      description: 'Zapatillas deportivas',
      price: 189999,
      stock: 5,
      imageUrl: '../../../assets/zapatillas.png',
      quantity: 1,
      discountPrice: 165299,
      discount: '13%',
      installment: 4703,
      freeShipping: true },
    { name: 'Anillo y Cadenita',
      description: 'Joyería fina en plata',
      price: 189999,
      stock: 2,
      imageUrl: '../../../assets/joyeria.png',
      quantity: 1,
      discountPrice: 165299,
      discount: '13%',
      installment: 4703,
      freeShipping: true },
    { name: 'Alimentos',
      description: 'Alimentos orgánicos',
      price: 189999,
      stock: 0,
      imageUrl: '../../../assets/alimentos.png',
      quantity: 1,
      discountPrice: 165299,
      discount: '13%',
      installment: 4703,
      freeShipping: true }
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
    console.log(this.selectedProduct)
}


  closePopup() {
    this.selectedProduct = null; 
  }


  addToCart(product: any, quantity: number): void {
    const cartItem = this.cartItems.find(item => item.name === product.name);
    if (cartItem) {
      cartItem.quantity += quantity; // Incrementa la cantidad seleccionada
    } else {
      this.cartItems.push({ ...product, quantity }); // Añade nuevo producto al carrito
    }
    this.saveCartItems();
  }

  

}
