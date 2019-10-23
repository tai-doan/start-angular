import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {
  product;
  constructor(private service: ProductService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.product= this.service.getItems();
    console.log(this.product);  
  }
  tongtien(){
    let s=0;
    for(let i=0; i< this.product.length; i++){
      s+=this.product[i].quantity * this.product[i].price;
    }
    return s;
  }
  tangsl(id){
    for(let i=0; i< this.product.length; i++){ 
      if(this.product[i].id==id){       
        this.product[i].quantity++;
      }
    }
  }
  giamsl(id){
    for(let i=0; i< this.product.length; i++){
      if(this.product[i].id==id && this.product[i].quantity > 0){
        this.product[i].quantity--;
      }
    }
  }
  DeleteItem(id){
    this.service.DeleteItem(id);
  }
  ktra(){
    if(this.product.length>0){
      return true;
    }
    else{
      return false;
    }
  }

}
