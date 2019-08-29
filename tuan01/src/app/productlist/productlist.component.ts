import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  listproduct = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "quantity": 3,
      "starRating": 3.2,
      "imageUrl": "leafrake.jpg"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "quantity": 4,
      "starRating": 4.2,
      "imageUrl": "gardencart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "quantity": 2,
      "starRating": 4.8,
      "imageUrl": "hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "quantity": 5,
      "starRating": 3.7,
      "imageUrl": "saw.jpg"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "quantity": 1,
      "starRating": 4.6,
      "imageUrl": "gamecontroller.jpg"
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  tongtien(){
    let s=0;
    for(let i=0; i< this.listproduct.length; i++){
      s+=this.listproduct[i].quantity * this.listproduct[i].price;
    }
    return s;
  }
  tangsl(id){
    for(let i=0; i< this.listproduct.length; i++){
      if(this.listproduct[i].productId==id){
        this.listproduct[i].quantity++;
      }
    }
  }
  giamsl(id){
    for(let i=0; i< this.listproduct.length; i++){
      if(this.listproduct[i].productId==id && this.listproduct[i].quantity > 0){
        this.listproduct[i].quantity--;
      }
    }
  }
  ah=true;
  text="Hidden"
  anhien(){
    this.ah=!this.ah;
    if(this.ah==true){
      this.text="Hidden";
    }else{
      this.text="Visible";
    }
  }
  sao(id){
    let wsao=1;
    for(let i=0; i< this.listproduct.length; i++){
      if(this.listproduct[i].productId==id){
        wsao=this.listproduct[i].starRating*18;
      }
    }
    return wsao;
  }
}
