import { Injectable } from '@angular/core';

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
  constructor() { }

}
