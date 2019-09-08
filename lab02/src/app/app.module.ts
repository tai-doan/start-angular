import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DanhsachsinhvienComponent } from './danhsachsinhvien/danhsachsinhvien.component';
import { ChitietkhoahocComponent } from './chitietkhoahoc/chitietkhoahoc.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DanhsachsinhvienComponent,
    ChitietkhoahocComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', component: DanhsachsinhvienComponent }, 
      { path: 'sinhvien', component: DanhsachsinhvienComponent},
      { path: 'sinhvien/:ID', component: ChitietkhoahocComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
