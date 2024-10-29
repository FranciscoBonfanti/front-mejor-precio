import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-var',
  templateUrl: './side-var.component.html',
  styleUrls: ['./side-var.component.css']
})
export class SideVarComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  envioCarrito(){
    this.router.navigate(['/carrito']);
  }

  rutaMapa(){
    this.router.navigate(['/mapa']);

  }

  navegar(ruta: string){
    this.router.navigate(['/'+ruta]);  }
}
