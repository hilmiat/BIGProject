import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KomponenkuComponent } from './komponenku/komponenku.component';
import { GambarComponent } from './gambar/gambar.component';
import { TabelSiswaComponent } from './tabel-siswa/tabel-siswa.component';
import {MatButtonModule,MatToolbarModule,MatTableModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    KomponenkuComponent,
    GambarComponent,
    TabelSiswaComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,MatToolbarModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
