import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmsdetail',
  templateUrl: './filmsdetail.component.html',
  styleUrls: ['./filmsdetail.component.css']
})
export class FilmsdetailComponent implements OnInit {
  films: any;
  url;
  constructor(private router: ActivatedRoute, private http: HttpClient) { 
    this.router.paramMap.subscribe(p=>{
      this.url=p.get('ID');
    })
  }

  ngOnInit() {
    this.getData().subscribe(data =>{
      this.films=data;
    })
  }
  getData(){
    return this.http.get(this.url);
  }
}
