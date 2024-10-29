import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-comercios',
  templateUrl: './all-comercios.component.html',
  styleUrls: ['./all-comercios.component.css']
})
export class AllComerciosComponent {
  constructor(private router: Router) {}


  redSport(){
    this.router.navigate(['/redSport']);

  }
}
