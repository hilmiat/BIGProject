import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KomponenkuComponent } from './komponenku/komponenku.component';
import { GambarComponent } from './gambar/gambar.component';
import { TabelSiswaComponent } from './tabel-siswa/tabel-siswa.component';
import {MatButtonModule,MatToolbarModule,MatTableModule} from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
//import untuk kebutuhan routing
import {RouterModule, Routes} from '@angular/router'
//konfigurasi route
const appRoutes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent },
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path:'**', component: PageNotFoundComponent }
]

//import service
import {RumahSakitService} from './service/rumah-sakit.service'
//import untuk http client
import {HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    KomponenkuComponent,
    GambarComponent,
    TabelSiswaComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,MatToolbarModule,MatTableModule,
    HttpClientModule,
  ],
  providers: [RumahSakitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
