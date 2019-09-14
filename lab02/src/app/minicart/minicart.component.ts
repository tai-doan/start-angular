import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.css']
})
export class MinicartComponent implements OnInit {
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
  tongitem(){
    let tong=0;
    for(var i=0; i<this.items.length; i++){
      tong+=this.items[i].quantity;
    }
    return tong;
  }
}
