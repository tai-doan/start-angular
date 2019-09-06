import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  addToCart(product) {
    this.cartService.addToCart(product);
  }
  product: any;
  id;
  pageTitle='';
  listproduct = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "quantity": 1,
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
      "quantity": 1,
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
      "quantity": 1,
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
      "quantity": 1,
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
  constructor(
    private route: ActivatedRoute,
    private cartService: CartServiceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params =>{
        this.id = +params.get('productId');
      }
    );
    this.product= this.listproduct.find(p =>p.productId===this.id);
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
