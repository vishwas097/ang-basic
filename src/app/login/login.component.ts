import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm : FormGroup;
submitted : boolean = false;
email ;
user_id ;
response : boolean = false;

  constructor(
    public formBuilder : FormBuilder,
    public router : Router,
    public _user : UserService
  ) { }

  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      username : ['', [Validators.required,Validators.email]],
      password : ['', [Validators.required]]
    });
  }

  login(){
    this.submitted = true;
    this.response = false;
    if(this.loginForm.invalid){
      return false;
    }
    let data = {
      "email" : this.loginForm.controls.username.value,
      "password" : this.loginForm.controls.password.value
    }
    this._user.login(data).subscribe((res)=>{
      debugger;
      if(res['remark'] == "Success!"){
        this.response = true;
        this.email = res['email'];
        this.user_id = res['user_id'];
      }

    },
    (error)=>{
      debugger;
    }
    )

    

  }
  register(){
    debugger;
    this.response = false;
    this.router.navigate(['/register'])
  }

}
