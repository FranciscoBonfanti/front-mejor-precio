import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from 'src/app/layout/add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrls: ['./card-prod.component.css']
})
export class CardProdComponent {
  // Lista de productos disponibles
  products = [
    { name: 'Perfume Dior', description: 'Perfume Dior Importado', price: 20, stock: 10, imageUrl: '../../../assets/perfumes.png' },
    { name: 'Perfume Dior', description: 'Perfume Dior Importado', price: 20, stock: 10, imageUrl: '../../../assets/perfumes.png' },
    { name: 'Zapatillas', description: 'Zapatillas deportivas', price: 50, stock: 5, imageUrl: '../../../assets/zapatillas.png' },
    { name: 'Zapatillas', description: 'Zapatillas deportivas', price: 50, stock: 5, imageUrl: '../../../assets/zapatillas.png' },
    { name: 'Anillo y Cadenita', description: 'Joyería fina en plata', price: 100, stock: 2, imageUrl: '../../../assets/joyeria.png' },
    { name: 'Anillo y Cadenita', description: 'Joyería fina en plata', price: 100, stock: 2, imageUrl: '../../../assets/joyeria.png' },
    { name: 'Alimentos', description: 'Alimentos orgánicos', price: 5, stock: 0, imageUrl: '../../../assets/alimentos.png' },
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

  cartItems: any[] = [];

  constructor(private dialog: MatDialog) {}

  openAddProductDialog(product: any): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      data: product
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.addToCart(result);
      }
    });
  }

  addToCart(product: any): void {
    this.cartItems.push(product);
    console.log('Producto añadido al carrito:', product);
    // Guarda los productos en el almacenamiento local si deseas persistirlos.
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
