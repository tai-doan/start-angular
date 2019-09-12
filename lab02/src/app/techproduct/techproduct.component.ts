import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-techproduct',
  templateUrl: './techproduct.component.html',
  styleUrls: ['./techproduct.component.css']
})
export class TechproductComponent implements OnInit {
  product =[
    {
      "id":1,
      "title":"Nokia",
      "image":"nokia.jpg",
      "price":"195",
      "supplier":"Nokia Computer",
      "describe":"Sản phẩm độc quyền từ nokia",
      "quantity":"5"
    },
    {
      "id":2,
      "title":"Samsung",
      "image":"samsung.jpg",
      "price":"125",
      "supplier":"Samsung Computer",
      "describe":"Sản phẩm độc quyền từ Samsung",
      "quantity":"6"
    },
    {
      "id":3,
      "title":"Google",
      "image":"google.jpg",
      "price":"150",
      "supplier":"Google Computer",
      "describe":"Sản phẩm độc quyền từ Google",
      "quantity":"9"
    },
    {
      "id":4,
      "title":"Apple",
      "image":"apple.jpg",
      "price":"156",
      "supplier":"Apple Computer",
      "describe":"Sản phẩm độc quyền từ Apple",
      "quantity":"55"
    },
    {
      "id":5,
      "title":"Asus",
      "image":"asus.jpg",
      "price":"175",
      "supplier":"Asus Computer",
      "describe":"Sản phẩm độc quyền từ Asus",
      "quantity":"59"
    },
    {
      "id":6,
      "title":"Xiaomi",
      "image":"xiaomi.jpg",
      "price":"150",
      "supplier":"Xiaomi Computer",
      "describe":"Sản phẩm độc quyền từ Xiami",
      "quantity":"50"
    }
]
  category=[
    {"id":1,"name":"Điện thoại di động"},
    {"id":2,"name":"Máy tính bảng"},
    {"id":3,"name":"Máy tính xách tay"},
    {"id":4,"name":"Máy tính để bàn"},
    {"id":5,"name":"Phụ kiện công nghệ"}
  ]
  tam=[
    {"productID":1,"CateID":1},
    {"productID":1,"CateID":3},
    {"productID":1,"CateID":5},
    {"productID":2,"CateID":2},
    {"productID":2,"CateID":3},
    {"productID":3,"CateID":2},
    {"productID":3,"CateID":5},
    {"productID":3,"CateID":4},
    {"productID":4,"CateID":5},
    {"productID":5,"CateID":1},
    {"productID":5,"CateID":4},
    {"productID":6,"CateID":1},
    {"productID":6,"CateID":2},
    {"productID":6,"CateID":3},
  ]
  public idcat=0;
  public sp=[];
  constructor(private route: ActivatedRoute, private cart: CartServiceService) { }

  ngOnInit() {
    
  }
  getidcat(id){
    this.idcat=id;
    this.sp=[];
    for(var i=0; i<this.tam.length; i++){
      for(var j=0; j<this.product.length; j++){
        if(this.tam[i].CateID==id && this.tam[i].productID==this.product[j].id){
          this.sp.push(this.product[j]);
        }
      }
    }
    return this.sp;
  }
}
