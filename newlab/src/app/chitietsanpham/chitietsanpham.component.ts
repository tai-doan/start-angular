import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrls: ['./chitietsanpham.component.css']
})
export class ChitietsanphamComponent implements OnInit {
  product;
  products;
  id: number;
  constructor(private service: ProductService, private router: ActivatedRoute) { 
    this.service.Getproduct().subscribe(data => {
      this.product= data;
      this.products= this.product.find(p => this.id=== p.id);
      // console.log(this.products);
    });
    this.router.paramMap.subscribe(p=>{
      this.id = +p.get('idsp');
      // console.log(this.id);
    });
  }
  muangay(pro){
    this.service.addToCart(pro);
  }
  tangsl(){
    this.products.quantity++;
  }
  giamsl(){
    this.products.quantity--;
  }
  ngOnInit() {
    
  }
}
