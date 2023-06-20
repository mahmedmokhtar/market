import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatogrusService } from '../../services/catogrus.service';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.css']
})
export class ProDetailsComponent implements OnInit{
  id:any;
  product:any={}
constructor( private route:ActivatedRoute, private ser:CatogrusService){
this.id = this.route.snapshot.paramMap.get("id")
console.log(this.id)
}
ngOnInit(): void {
  this.Getsingleproduct()
}
Getsingleproduct(){
  this.ser.Getsingleproduct(this.id).subscribe(res=>{
    this.product = res

  })
}
}
