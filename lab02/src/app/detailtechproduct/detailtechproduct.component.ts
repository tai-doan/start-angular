import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-detailtechproduct',
  templateUrl: './detailtechproduct.component.html',
  styleUrls: ['./detailtechproduct.component.css']
})
export class DetailtechproductComponent implements OnInit {
  addToCart(product) {
    this.cart.addToCart(product);
  }
  // hàm lọc sản phẩm bị trùng
  getUnique(arr, comp) {

    const unique = arr
      .map(e => e[comp])
  
       // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
  
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);
     return unique;
  }

  pageTitle='';
  product =[
    {
      "id":1,
      "title":"Nokia",
      "image":"nokia.jpg",
      "price":"195",
      "supplier":"Nokia Computer",
      "describe":"Sản phẩm độc quyền từ nokia",
      "quantity":"1"
    },
    {
      "id":2,
      "title":"Samsung",
      "image":"samsung.jpg",
      "price":"125",
      "supplier":"Samsung Computer",
      "describe":"Sản phẩm độc quyền từ Samsung",
      "quantity":"1"
    },
    {
      "id":3,
      "title":"Google",
      "image":"google.jpg",
      "price":"150",
      "supplier":"Google Computer",
      "describe":"Sản phẩm độc quyền từ Google",
      "quantity":"1"
    },
    {
      "id":4,
      "title":"Apple",
      "image":"apple.jpg",
      "price":"156",
      "supplier":"Apple Computer",
      "describe":"Sản phẩm độc quyền từ Apple",
      "quantity":"1"
    },
    {
      "id":5,
      "title":"Asus",
      "image":"asus.jpg",
      "price":"175",
      "supplier":"Asus Computer",
      "describe":"Sản phẩm độc quyền từ Asus",
      "quantity":"1"
    },
    {
      "id":6,
      "title":"Xiaomi",
      "image":"xiaomi.jpg",
      "price":"150",
      "supplier":"Xiaomi Computer",
      "describe":"Sản phẩm độc quyền từ Xiami",
      "quantity":"1"
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
  idsp;
  sp: any;
  idcat=[];
  sanpham=[];
  spao=[];
  constructor(private route: ActivatedRoute, private cart: CartServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params =>{
        this.idsp = +params.get('ID');
      }
    );
    this.sp= this.product.find(p =>p.id===this.idsp);
    // thêm tất id category có chứa sản phẩm vào json idcat
    for(var i=0; i<this.tam.length; i++){
      if(this.tam[i].productID==this.idsp){
        this.idcat.push(this.tam[i]);
      }
    }
    // thêm những sản phẩm có trong tất cả danh mục
    for(var k=0; k<this.idcat.length; k++){
      for(var i=0; i<this.tam.length; i++){
        if(this.idcat[k].CateID==this.tam[i].CateID){
          for(var j=0; j<this.product.length; j++){
            if(this.tam[i].productID==this.product[j].id){
              this.sanpham.push(this.product[j]);
            }
          }
        }
      }
    }
    // trả về json sản phẩm đã lọc trùng lặp sản phẩm
    this.sanpham=this.getUnique(this.sanpham,'id');
    // lọc sản phẩm trong sản phẩm liên quan là sản phẩm đang hiển thị
    for(var i=0; i<this.sanpham.length; i++){
      if(this.sanpham[i].id==this.idsp){
        return this.sanpham.splice(i,1);
      }
    }
  }
  
}
