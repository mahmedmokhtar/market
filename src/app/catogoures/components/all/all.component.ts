import { Component, OnInit } from '@angular/core';
import { CatogrusService } from '../../services/catogrus.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit  {
  products:any = [];
 catougrey :any = [];
 loading:boolean = false;
 datepro :any =[];

constructor(private catag:CatogrusService){

}
ngOnInit(){
this.getall()
this.getcat()

}
getall(){
  this.loading = true;
  this.catag.getall().subscribe(res=>{
    this.loading = false;
    this.products = res;
    console.log(res)
  })

}
getcat(){
  this.loading = true
this.catag.getcat().subscribe(res=>{
  this.loading = false
this.catougrey = res

})
}
filtercat(select:any){

let value = select.value;
 value == "all" ? this.getall():
this.getAllCategories(value)
}
getAllCategories(keyword:string){
  this.loading = true
  this.catag.getAllCategories(keyword).subscribe((res)=>{
    this.loading= false
    this.products = res

  })
}
getcard(event:any){
  if("data" in localStorage){
    this.datepro = JSON.parse(localStorage.getItem("data")!)
    let exast = this.datepro.find((data:any) => data.data.id == event.data.id)
    if(exast){
      alert("this cart is found there catd")
    }else{
      this.datepro.push(event)
      localStorage.setItem("data" , JSON.stringify(this.datepro))
    }

  }else{

    this.datepro.push(event)
    localStorage.setItem("data" , JSON.stringify(this.datepro))
  }

}
}
