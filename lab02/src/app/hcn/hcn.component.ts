import { Component, OnInit } from '@angular/core';
import { FormsModule, Validator } from '@angular/forms'

@Component({
  selector: 'app-hcn',
  templateUrl: './hcn.component.html',
  styleUrls: ['./hcn.component.css']
})
export class HCNComponent implements OnInit {
  HCN={
    cd: null,
    cr: null,
    cv: null,
    dt: null
  };
  list=[
    {
      age: "Dưới 25 tuổi",
      rate: 0.07
    },
    {
      age: "Từ 25 đến 40 tuổi",
      rate: 0.1
    },
    {
      age: "Trên 40 tuổi",
      rate: 0.15
    }
  ];
  items=[
    {
      name:"Nước Ngọt",
      price: 10000,
      quantity: 1,
      confirm: true
    },
    {
      name:"Cà phê đen",
      price: 12000,
      quantity: 1,
      confirm: true
    },
    {
      name:"Thuốc lá",
      price: 18000,
      quantity: 1,
      confirm: true
    }
  ];
  
  tien(confirm, price, quantity){
    return price*quantity;
  }
  tongtien(){
    var tt=0;
    for(var i=0; i<this.items.length; i++){
      if(this.items[i].confirm){
        tt+= this.tien(this.items[i].confirm, this.items[i].price, this.items[i].quantity);
      }
    }
    return tt;
  }
  tongtienthuong={
    hovaten: null,
    luong: null,
    gender: 'nam',
    tuoi: null
  }
  tienthuong =null;
  constructor() { }

  ngOnInit() {
    this.tinhtien();
  }

  calculator(){
    this.HCN.cv=(this.HCN.cd + this.HCN.cr)*2;
    this.HCN.dt=this.HCN.cd * this.HCN.cr;
  }

  tinhtien(){
    if(true){
      if(this.tongtienthuong.gender=='nu'){
        this.tienthuong=(this.tongtienthuong.luong*this.tongtienthuong.tuoi)+200000;
      }else{
        this.tienthuong=(this.tongtienthuong.luong*this.tongtienthuong.tuoi);
      }
    }
  }
}
