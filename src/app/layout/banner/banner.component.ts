import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class CarouselComponent implements OnInit {
  bannerImages: string[] = [
    '../../../assets/mejor.png',
    '../../../assets/banner3.webp',
    '../../../assets/banner1.webp',
    '../../../assets/banner2.webp'
  ];

  currentIndex: number = 0;
  intervalId: any;

  constructor() {}

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); // Cambia la imagen cada 3 segundos
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.bannerImages.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo cuando se destruye el componente
    }
  }
}
