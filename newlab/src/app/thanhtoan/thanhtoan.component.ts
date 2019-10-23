import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent implements OnInit {
  billing ={
    name: null,
    address: null,
    phone: null,
    email: null
  }
  shipping ={
    name: null,
    address: null,
    phone: null,
    email: null
  }
  product;
  kt: boolean;
  hiddenbilling= false;
  numberoforder:number;
  date;
  back=true;
  constructor(private service: ProductService, private router: ActivatedRoute, private route: Router) { 
    if(this.service.items.length==0){
      this.route.navigate(['/home']);
    }
  }
  
  ngOnInit() {
    this.product= this.service.getItems();
    this.kiemtra();
    this.date=new Date();
    this.numberoforder=Math.round(Math.random()*100);
    
  }
  saveshipping(){
    this.kiemtra();
  }
  savebilling(){
    this.hiddenbilling= true;
  }
  tongtien(){
    let s=0;
    for(let i=0; i< this.product.length; i++){
      s+=this.product[i].quantity * this.product[i].price;
    }
    return s;
  }
  kiemtra(){
    if(this.billing.name != null && this.shipping.name != null){
      this.kt= true;
    }else{
      this.kt= false;
    }
  }
}
