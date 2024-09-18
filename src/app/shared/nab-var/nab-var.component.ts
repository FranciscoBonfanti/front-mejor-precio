import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nab-var',
  templateUrl: './nab-var.component.html',
  styleUrls: ['./nab-var.component.css']
})
export class NabVarComponent {
  constructor(private router: Router){}

  loginn(){
    this.router.navigate(['/login']);
  }
}
