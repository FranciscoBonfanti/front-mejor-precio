import { Component } from '@angular/core';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrls: ['./card-prod.component.css']
})
export class CardProdComponent {
  products = [
    { name: 'Camiseta', description: 'Camiseta 100% algodón', price: 20, stock: 10 },
    { name: 'Zapatillas', description: 'Zapatillas deportivas', price: 50, stock: 5 },
    { name: 'Anillo de plata', description: 'Joyería fina en plata', price: 100, stock: 2 },
    { name: 'Snack saludable', description: 'Alimentos orgánicos', price: 5, stock: 0 }
  ];
}
