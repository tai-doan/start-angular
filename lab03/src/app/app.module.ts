import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhsachComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot([ 
      { path: '', component: DanhsachComponent },
      { path: 'danhsach', component: DanhsachComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
    BrowserModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
