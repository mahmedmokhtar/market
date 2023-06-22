import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  datepro:any[] = [];
  total = 0;
  fintotal:any;
  sucess:boolean=false;
constructor(private cartser:CartService){

}
ngOnInit() {
this.getcartonlocal()
this.getalltotal()
}
getcartonlocal(){
  if("data" in localStorage){
    this.datepro = JSON.parse(localStorage.getItem("data")!)
  }
  this.getalltotal()
}

deletecart(i:any){
  this.datepro.splice(i,1)
  this.getalltotal();
  localStorage.setItem("data" , JSON.stringify(this.datepro))
}
addtotol(i:any){
this.datepro[i].quantity++
this.getalltotal()
localStorage.setItem("data" , JSON.stringify(this.datepro))

}
mintotol(i:any){
  this.datepro[i].quantity--;
  this.getalltotal()
  localStorage.setItem("data" , JSON.stringify(this.datepro))

}
resualt(){
  localStorage.setItem("data" , JSON.stringify(this.datepro))

}
cleardate(){

  this.datepro = []
  localStorage.setItem("data" , JSON.stringify(this.datepro))
this.getalltotal()
}
getalltotal(){
  this.total = 0;
  for(let x = 0 ; x < this.datepro.length ; x++){
    // this.total = (this.datepro[x].data.price * this.datepro[x].quantity)
    this.total += Math.ceil(this.datepro[x].data.price * this.datepro[x].quantity)

  }
}
sendcart(){
  let products = this.datepro.map((item)=>{
    return {productId:item.data.id,quantity:item.quantity}
  })
  let modul ={
    userid:5,
    date : new Date(),
    products:products
  }
  console.log(modul)
this.cartser.addnewcart(modul).subscribe((res)=>{
this.sucess= true;
})
}
}
