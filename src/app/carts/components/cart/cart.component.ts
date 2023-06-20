import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  datepro:any[] = [];
  total = 0;
constructor(){

}
ngOnInit() {
this.getcartonlocal()
}
getcartonlocal(){
  if("data" in localStorage){
    this.datepro = JSON.parse(localStorage.getItem("data")!)
  }
  this.getalltotal()
}
getalltotal(){
  this.total = 0;
  for(let x = 0 ; x < this.datepro.length ; x++){
    // this.total = (this.datepro[x].data.price * this.datepro[x].quantity)
    this.total += this.datepro[x].data.price * this.datepro[x].quantity

  }
}
}
