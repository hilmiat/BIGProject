import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gambar',
  //templateUrl: './gambar.component.html',
  template:`
  	<img src="{{imageUrl}}">
  	<img [src]="imageUrl">
  	<img bind-src="imageUrl">
  `,	
  styleUrls: ['./gambar.component.css']
})
export class GambarComponent implements OnInit {
  imageUrl='https://angular.io/assets/images/logos/angular/angular.png'
  constructor() { }

  ngOnInit() {
  }

}
