import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-prod',
  templateUrl: './popup-prod.component.html',
  styleUrls: ['./popup-prod.component.css']
})
export class PopupProdComponent {
  @Input() product: any = null; 
  @Output() closePopup = new EventEmitter<void>(); 
  @Output() confirmPurchase = new EventEmitter<void>(); 

  quantity: number = 1;

  constructor(private router: Router) {}

  onConfirmPurchase() {
    this.confirmPurchase.emit();
    this.router.navigate(['/carrito'], { state: { product: this.product, quantity: this.quantity } });
  }  

  onClosePopup() {
    this.closePopup.emit(); 
  }
}
