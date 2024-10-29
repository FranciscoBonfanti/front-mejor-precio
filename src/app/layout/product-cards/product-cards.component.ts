import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;


  products = [
    {
      name: 'Short De Muay Thai Tribo Kick Boxing Mma Thai Lucha',
      image: '../../../assets/short-tai.webp',  
      originalPrice: 58610,
      discountPrice: 46890,
      discount: '20%',
      installment: 2390,
      freeShipping: false
    },
    {
      name: 'Auriculares Inalámbricos Logitech G435 Negro',
      image: '../../../assets/auriculares-merc.webp',
      originalPrice: 325913,
      discountPrice: 260730,
      discount: '20%',
      installment: 1855,
      freeShipping: false
    },
    {
      name: 'Guantes Boxeo Proyec Vendas Combo Box Muay Thai',
      image: '../../../assets/guantes-merc.webp',
      originalPrice: 110363,
      discountPrice: 88290,
      discount: '20%',
      installment: 4703,
      freeShipping: true
    },
    {
      name: 'Xiaomi Pocophone Poco M6 Pro Dual SIM 512 GB',
      image: '../../../assets/celu-merc.webp',
      originalPrice: 749999,
      discountPrice: 603999,
      discount: '19%',
      installment: 4703,
      freeShipping: true
    },
    {
      name: 'Hidrolavadora Electrica Trent HLT307 1400W',
      image: '../../../assets/hidro-merc.webp',
      originalPrice: 160000,
      discountPrice: 98952,
      discount: '38%',
      installment: 4703,
      freeShipping: true
    },
    {
      name: 'Silla Ergonómica Smart Tech WS5147 Oficina Escritorio',
      image: '../../../assets/silla-merc.webp',
      originalPrice: 72999,
      discountPrice: 65699,
      discount: '10%',
      installment: 4703,
      freeShipping: true
    },
    {
      name: 'Batería Cocina Olla Mta Safira Aluminio Teflón',
      image: '../../../assets/ollas-merc.webp',
      originalPrice: 69999,
      discountPrice: 59999,
      discount: '13%',
      installment: 4703,
      freeShipping: true
    },
    {
      name: 'Maquina Boxeo Bluetooth Inteligente Usb Guantes',
      image: '../../../assets/golpeador-merc.webp',
      originalPrice: 189999,
      discountPrice: 165299,
      discount: '13%',
      installment: 4703,
      freeShipping: true
    },
  ];

  get visibleProducts() {
    return this.products; 
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -220, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 220, behavior: 'smooth' });
  }

}
