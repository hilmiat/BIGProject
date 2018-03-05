import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabel-siswa',
  // templateUrl: './tabel-siswa.component.html',
  template:`
   <button (click)="gantiTampilan()" mat-button color="primary" >Ganti Tampilan</button>
   <button (click)="this.isList = !this.isList" mat-raised-button color="primary">Ganti Tampilan</button>
  <h4 *ngIf="isList; else textTabel">List siswa</h4>
  <ng-template #textTabel><h4> Tabel siswa </h4></ng-template>

    <ul *ngIf="isList">
      <li *ngFor="let siswa of dataSiswa">{{siswa.nama | lowercase}}</li>
    </ul>
    <mat-table [dataSource]="dataSiswa">
      <!-- buat kolom -->
      <ng-container matColumnDef="nama">
        <mat-header-cell *matHeaderCellDef>Nama</mat-header-cell>
        <mat-cell *matCellDef="let siswa">{{siswa.nama |uppercase}}</mat-cell>
      </ng-container>
      <ng-container matColumnDef="nilai">
        <mat-header-cell *matHeaderCellDef>Nilai</mat-header-cell>
        <mat-cell *matCellDef="let siswa">{{siswa.nilai}}</mat-cell>
      </ng-container>
      <!-- definisikan data tiap baris -->
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row;columns:displayedColumns;"></mat-row>
    </mat-table>
    <table border=1 *ngIf="!isList">
      <tr [ngStyle]="{'background-color':'blue'}">
        <td>Nama</td><td>Nilai</td><td>Tanggal lahir</td><td>Tanggal lahir</td>
        </tr>
      <tr *ngFor="let siswa of dataSiswa">
        <td>{{siswa.nama | uppercase }}</td>
        <td>{{siswa.nilai | number:'2.1-5'}}</td>
        <td>{{siswa.tgl_lahir}}</td>
        <td>{{siswa.tgl_lahir | date:"MM/dd/yy"}}</td>
        </tr>
    </table>
  `,
  styleUrls: ['./tabel-siswa.component.css']
})
export class TabelSiswaComponent implements OnInit {
  isList=true
  dataSiswa = [
    {nama:'Adi',nilai:100,tgl_lahir:new Date(1990,3,15)},
    {nama:'Ade',nilai:95,tgl_lahir:'1991-11-11'},
    {nama:'Adu',nilai:78,tgl_lahir:new Date(1990,9,5)}
  ]
  displayedColumns = ['nama','nilai']
  gantiTampilan(){
    this.isList = !this.isList 
  }

  constructor() { }

  ngOnInit() {
  }

}
