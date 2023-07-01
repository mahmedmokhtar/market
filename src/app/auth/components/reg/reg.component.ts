import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  reg!:FormGroup;
  constructor(private fb:FormBuilder){

  }
ngOnInit(){
this.createform()
}
createform(){
  this.reg = this.fb.group({
    username:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    conpassword:['',[Validators.required]],
  })
}
}
