import { Component } from '@angular/core';


@Component({
  selector: 'app-sidenav-mapa',
  templateUrl: './sidenav-mapa.component.html',
  styleUrls: ['./sidenav-mapa.component.css']
})
export class SidenavMapaComponent {

  selectedComercio: any = null;

  comercios: { [key: string]: { nombre: string; descripcion: string; ubicacion: string; imagen: string } } = {
    APC: {
      nombre: 'APC',
      descripcion: 'APC es un comercio especializado en productos electrónicos y tecnología.',
      ubicacion: 'Av. Tecnológica 123, Ciudad Tech',
      imagen:'../../../assets/origami.png'
    },
    'Teniente Dan': {
      nombre: 'Teniente Dan',
      descripcion: 'Teniente Dan ofrece ropa militar y outdoor de alta calidad.',
      ubicacion: 'Calle Aventura 456, Ciudad Outdoor',
      imagen: '../../../assets/origami.png'
    },
    'Red Sport': {
      nombre: 'Red Sport',
      descripcion: 'Red Sport es un centro de ventas de artículos deportivos y ropa fitness.',
      ubicacion: 'Blvd. Deportivo 789, Ciudad Fit',
      imagen: '../../../assets/origami.png'
    },
    Menta: {
      nombre: 'Menta',
      descripcion: 'Menta es una tienda de moda con un enfoque en ropa casual y moderna.',
      ubicacion: 'Plaza Central 321, Ciudad Fashion',
      imagen: '../../../assets/origami.png'
    }
  };

  comercioKeys: string[] = Object.keys(this.comercios);

  title = 'gmaps';

  centerPosition = { lat: -31.448501491675934, lng: -60.93176876236277 };
  positions = [
    { lat: -31.448501491675934, lng: -60.93176876236277, text: 'APC' },
    { lat: -31.44951826622449, lng: -60.93160133360495, text: 'Teniente Dan' },
    { lat: -31.446674225557185, lng: -60.93668458942689, text: 'Mundo numa' },
    {lat: -31.449838346875847, lng: -60.93052787593369, text:'Red Sport'},
    {lat:-31.44743341490549, lng: -60.93084517778333, text: 'Menta'}
  ];


  label = {
    color: 'blue',
    text: 'APC'
  };

  selectComercio(comercio: string) {
    this.selectedComercio = this.comercios[comercio];
  }

}