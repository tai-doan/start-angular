import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];
  slsp=0;
  addToCart(product) {
    if(this.items.length>0){
      for(var i=0; i<this.items.length; i++){
          if(this.items[i].id===product.id){
            this.slsp++;
            this.items[i].quantity++;
          }
      }
      if(this.slsp==0){
        this.items.push(product);
      }else{
        this.slsp=0;   
      }
    }else{
		  this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  DeleteItem(id){
    for(let i=0; i< this.items.length; i++){
      if(this.items[i].id===id){
        return this.items.splice(i,1);
      }
    }
  }
  constructor() { }
}
