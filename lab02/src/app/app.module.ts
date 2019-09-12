import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    DanhsachsinhvienComponent,
    ChitietkhoahocComponent,
    TechproductComponent,
    DetailtechproductComponent,
    MinicartComponent,
    TechcartComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot([ 
      { path: '', component: TechproductComponent }, 
      { path: 'sinhvien', component: DanhsachsinhvienComponent},
      { path: 'sinhvien/:ID', component: ChitietkhoahocComponent },
      { path: 'san-pham/', component: TechproductComponent },
      { path: 'san-pham/:ID', component: DetailtechproductComponent },
      { path: 'gio-hang/', component: TechcartComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
