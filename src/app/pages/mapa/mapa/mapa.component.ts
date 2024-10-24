import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  title = 'gmaps';

  centerPosition = { lat: -31.448501491675934, lng: -60.93176876236277 };
  positions = [
    { lat: -31.448501491675934, lng: -60.93176876236277, text:'APC'},
    { lat: -31.44951826622449, lng: -60.93160133360495 , text:'Teniente Dan'},
    { lat: -31.446674225557185, lng: -60.93668458942689 , text:'Mundo numa'}
  ];
  

  label = {
    color: 'blue',
    text: 'APC'
  };

}
