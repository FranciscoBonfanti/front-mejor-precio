import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

    constructor(private http: HttpClient) {}

    // listaProductos: Producto[] = [];

  ngOnInit(): void {
    
    // this.http.get<Producto[]>('../../../../prueba.json').subscribe( (res) => {

    //   this.listaProductos = res;
      
    // })
  }


}
