import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AdmintemplateComponent } from './admintemplate/admintemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailsComponent,
    ProductlistComponent,
    AdmintemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
