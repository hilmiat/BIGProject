import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RumahSakitService {
  dataRumahSakit:any[] = [
    {nama_rsu:"Tarakan", jenis_rsu:"Rumah Sakit Umum Daerah"},
    {nama_rsu:"DR. Mintohardjo", jenis_rsu:"Rumah Sakit Umum TNI - AL"},
    {nama_rsu:"Sahid Sahirman", jenis_rsu:"Rumah Sakit Umum"},
  ] 
  getDataRS():any[]{
    return this.dataRumahSakit;
  }
  constructor(private http:HttpClient) { }

  endpointUrl = "/myapi/v1/rumahsakitumum";
  // endpointUrl = "http://api.jakarta.go.id/v1/rumahsakitumum";
  header = new HttpHeaders({
    'Authorization':
    'F3bxMaKA53ghpbNKxchlBx7apJuWx2KOkSF6qLr8hTT5na78mgc7W/b3KzFwSWHe'});
  
   getDataFromWS():Observable<any>{
     return this.http.get<any>(this.endpointUrl,{headers:this.header});
   } 

}
