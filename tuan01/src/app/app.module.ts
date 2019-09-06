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
    AdmintemplateComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', component: AdmintemplateComponent }, 
      { path: 'product', component: ProductlistComponent},
      { path: 'product/:productId', component: ProductdetailsComponent },
      { path: 'cart', component: CartComponent }, 
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

