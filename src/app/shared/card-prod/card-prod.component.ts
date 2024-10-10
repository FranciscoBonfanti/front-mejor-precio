import { Component } from '@angular/core';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrls: ['./card-prod.component.css']
})
export class CardProdComponent {
  // Lista de productos disponibles
  products = [
    { name: 'Perfume Dior', description: 'Perfume Dior Importado', price: 20, stock: 10, imageUrl: '../../../assets/perfumes.png' },
    { name: 'Zapatillas', description: 'Zapatillas deportivas', price: 50, stock: 5, imageUrl: '../../../assets/zapatillas.png' },
    { name: 'Anillo y Cadenita', description: 'Joyería fina en plata', price: 100, stock: 2, imageUrl: '../../../assets/joyeria.png' },
    { name: 'Alimentos', description: 'Alimentos orgánicos', price: 5, stock: 0, imageUrl: '../../../assets/alimentos.png' }
  ];

  selectedProduct: any = null; 

  openPopup(product: any) {
    this.selectedProduct = product; 
  }

  closePopup() {
    this.selectedProduct = null; 
  }

  confirmPurchase() {
    alert('Compra confirmada para el producto: ' + this.selectedProduct.name);
    this.selectedProduct = null; 
  }
}
