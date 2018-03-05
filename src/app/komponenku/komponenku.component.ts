import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponenku',
  template: `
    <button (click)="handleClick()">{{btnText}}</button>
    <img [src]="imgUrl" [width]="imgWidth" 
      (mouseover)="perbesar()" (mouseout)="perkecil()">
  `,
  styleUrls: ['./komponenku.component.css']
})
export class KomponenkuComponent implements OnInit {
  btnText = 'Perbesar Gambar'
  imgUrl='https://angular.io/assets/images/logos/angular/angular.png'
  imgWidth='100'
  perbesar(){
    this.imgWidth='200'
  }
  perkecil(){
    this.imgWidth = parseInt(this.imgWidth)/2+''
  }
  handleClick(){
    console.log('Tombol ditekan..');
    this.imgWidth='400'
  }
  constructor() { }

  ngOnInit() {
  }

}
