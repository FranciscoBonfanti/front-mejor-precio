import { Component } from '@angular/core';

@Component({
  selector: 'app-red-sport',
  templateUrl: './red-sport.component.html',
  styleUrls: ['./red-sport.component.css']
})
export class RedSportComponent {

  store = {
    name: 'Red Sport',
    description: 'Tienda de calzados e indumentaria deportiva.',
    location: 'San Martín 2441, Esperanza, Santa Fe',
    imageUrl: '../../../assets/redsport-local.jpg'
  };

  products = [
    { name: 'ZAPATILLAS PUMA ADP MUJER', description: 'Calzado para damas T 35/44 para todoas las edades.', price: 109.999, imageUrl: '../../../assets/zapa-puma.webp' },
    { name: 'BOTINES NIKE LEGEND 10 FÚTBOL', description: 'Teléfono inteligente con cámara avanzada y batería duradera.', price: 152.248, imageUrl: '../../../assets/botines-red.webp' },
    { name: 'ZAPATILLAS TOPPER SPLIT SÚPER', description: 'Auriculares inalámbricos con cancelación de ruido.', price: 110.365, imageUrl: '../../../assets/zapas5-red.webp' },
    { name: 'ZAPATILLAS ADIDAS SUPERNOVA RISE M', description: 'Tablet con pantalla de 10 pulgadas, ideal para entretenimiento.', price: 130.999, imageUrl: '../../../assets/zapas2-red.webp' },
    { name: 'ZAPATILLAS ADIDAS GRAND COURT 2.0', description: 'Tablet con pantalla de 10 pulgadas, ideal para entretenimiento.', price: 85.654, imageUrl: '../../../assets/zapas3-red.webp' },
    { name: 'ZAPATILLAS ADIDAS ULTRABOOST LIGHT', description: 'Tablet con pantalla de 10 pulgadas, ideal para entretenimiento.', price: 160.659, imageUrl: '../../../assets/zapas4-red.webp' }
  ];
}
