import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards = [
    { title: 'Zapatillas', imageUrl: '../../../assets/zapatillas.png' },
    { title: 'Alimentos', imageUrl: '../../../assets/alimentos.png' },
    { title: 'Electrónica', imageUrl: '../../../assets/electronica.png' },
    { title: 'Perfumes', imageUrl: '../../../assets/perfumes.png' },
    { title: 'Joyeria', imageUrl: '../../../assets/joyeria.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

