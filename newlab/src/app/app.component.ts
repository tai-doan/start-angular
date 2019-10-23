import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newlab';
  categories: any;
  constructor(private service: ProductService, private router: ActivatedRoute) { 
    this.service.Getcategories().subscribe(data => {
      this.categories= data;
      // console.log(this.categories);
    });
  }
}
