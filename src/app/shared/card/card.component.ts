import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  
  cards = [
    { 
      title: 'Zapatillas', 
      imageUrl: '../../../assets/zapatillas.png',
      action: () => this.goToPage('allProducts')
    },
    { 
      title: 'Alimentos', 
      imageUrl: '../../../assets/alimentos.png',
      action: () => this.goToPage('allProducts')
    },
    { 
      title: 'Electrónica', 
      imageUrl: '../../../assets/electronica.png',
      action: () => this.goToPage('allProducts') 
    },
    { 
      title: 'Perfumes', 
      imageUrl: '../../../assets/perfumes.png',
      action: () => this.goToPage('allProducts') 
    },
    { 
      title: 'Joyería', 
      imageUrl: '../../../assets/joyeria.png',
      action: () => this.goToPage('allProducts') 
    }
  ];
  

  constructor(private router: Router) {} 

  ngOnInit(): void {}

  goToPage(page: string) {
    this.router.navigate([`${page}`]); 
  }
  
}
