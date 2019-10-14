import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  url ="https://swapi.co/api/films/";
  listfilm: any;
  films: any;
  constructor(public http: HttpClient) { 
    this.getData().subscribe(data =>{
      this.films= data;
      this.listfilm= this.films.results;
    })
    
  }
  getData(){
    return this.http.get(this.url);
  }
  ngOnInit() {
    
  }

}
