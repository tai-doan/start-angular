import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any=[];
  cid: number;
  constructor(private service: ProductService, private router: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.router.paramMap.subscribe(para =>{
      this.cid= +para.get('id');
      console.log(this.cid);
      this.loadData();
    });
  }

  loadData(){
    if(this.cid === 0){
      this.service.Getproduct().subscribe(data => {
        this.product= data;
      });
    }else{
      this.service.Getproduct().subscribe(data => {
        this.product= data;
        // console.log("pro",this.product);
        this.product= this.product.filter(p => this.cid=== p.cid);
        // console.log("sau",this.product)
      });
    }
  }
}
