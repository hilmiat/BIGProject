import { Component, OnInit } from '@angular/core';
//import rumahsakit service
import {RumahSakitService} from '../../service/rumah-sakit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataRS:any[];
  displayedColumns = ['nama_rsu','jenis_rsu','id']
  constructor(private rsService:RumahSakitService) {
      console.log('mengambil data rumah sakit');
      console.log(this.rsService.dataRumahSakit);    
   }
  ngOnInit() {
    // this.dataRS = this.rsService.dataRumahSakit;
    this.rsService.getDataFromWS().subscribe(
      result=>{
        console.log(result)
        this.dataRS = result.data
      },
      error=>{console.log(error)}
    );
  }

}
