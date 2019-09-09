import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DanhsachsinhvienComponent } from './danhsachsinhvien/danhsachsinhvien.component';
import { ChitietkhoahocComponent } from './chitietkhoahoc/chitietkhoahoc.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    DanhsachsinhvienComponent,
    ChitietkhoahocComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot([ 
      { path: '', component: DanhsachsinhvienComponent }, 
      { path: 'sinhvien', component: DanhsachsinhvienComponent},
      { path: 'sinhvien/:ID', component: ChitietkhoahocComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
