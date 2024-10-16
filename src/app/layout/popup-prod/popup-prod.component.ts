import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-prod',
  templateUrl: './popup-prod.component.html',
  styleUrls: ['./popup-prod.component.css']
})
export class PopupProdComponent {
openAddProductDialog(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() product: any = null; 
  @Output() closePopup = new EventEmitter<void>(); 
  @Output() confirmPurchase = new EventEmitter<void>(); 

  constructor(private router: Router) {}

  onConfirmPurchase() {
    this.confirmPurchase.emit();
    this.router.navigate(['/carrito'], { state: { product: this.product } });
  }  

  onClosePopup() {
    this.closePopup.emit(); 
  }

}
