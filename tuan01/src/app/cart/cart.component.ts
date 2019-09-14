import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  
  constructor(private cartService: CartServiceService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  tongtien(){
    let s=0;
    for(let i=0; i< this.items.length; i++){
      s+=this.items[i].quantity * this.items[i].price;
    }
    return s;
  }
  tangsl(id){
    for(let i=0; i< this.items.length; i++){ 
      if(this.items[i].productId==id){       
        this.items[i].quantity++;
      }
    }
  }
  giamsl(id){
    for(let i=0; i< this.items.length; i++){
      if(this.items[i].productId==id && this.items[i].quantity > 0){
        this.items[i].quantity--;
      }
    }
  }
  DeleteItem(id){
    this.cartService.DeleteItem(id);
  }
  ktra(){
    if(this.items.length>0){
      return true;
    }
    else{
      return false;
    }
  }
}
