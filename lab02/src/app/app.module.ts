import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DanhsachsinhvienComponent } from './danhsachsinhvien/danhsachsinhvien.component';
import { ChitietkhoahocComponent } from './chitietkhoahoc/chitietkhoahoc.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TechproductComponent } from './techproduct/techproduct.component';
import { DetailtechproductComponent } from './detailtechproduct/detailtechproduct.component';
import { MinicartComponent } from './minicart/minicart.component';
import { TechcartComponent } from './techcart/techcart.component';
import { HCNComponent } from './hcn/hcn.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { ChitietsinhvienComponent } from './chitietsinhvien/chitietsinhvien.component';
import { FilmsComponent } from './films/films.component';
import { FilmsdetailComponent } from './filmsdetail/filmsdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhsachsinhvienComponent,
    ChitietkhoahocComponent,
    TechproductComponent,
    DetailtechproductComponent,
    MinicartComponent,
    TechcartComponent,
    HCNComponent,
    SinhvienComponent,
    ChitietsinhvienComponent,
    FilmsComponent,
    FilmsdetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot([ 
      { path: '', component: TechproductComponent }, 
      { path: 'hinhchunhat', component: HCNComponent},
      { path: 'sinhvien', component: DanhsachsinhvienComponent},
      { path: 'student', component: SinhvienComponent},
      { path: 'sinhvien/:ID', component: ChitietkhoahocComponent },
      { path: 'san-pham', component: TechproductComponent },
      { path: 'san-pham/:ID', component: DetailtechproductComponent },
      { path: 'gio-hang', component: TechcartComponent },
      { path: 'films', component: FilmsComponent },
      { path: 'films/:ID', component: FilmsdetailComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
