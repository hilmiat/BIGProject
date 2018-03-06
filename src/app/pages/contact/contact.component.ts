import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model = {nama:'Isi nama',alamat:'',pilihan:''}

  doSubmit(){
    console.log('Anda mengirim data:',this.model);
  }
  constructor() { }

  ngOnInit() {
  }

}
