import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login!:FormGroup;
  users={}

  constructor(private fb:FormBuilder ,private authser:AuthService){
  }
  ngOnInit(

  ){
    this.createform()

  }
  createform(){
this.login = this.fb.group({
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required]]
})
  }

}
