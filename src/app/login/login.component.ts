import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : any = "";
  password : any = "";
  loginForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)])
  });

  userLogin(){
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.auth.logIn(this.username, this.password);
  }

  constructor(private api:ApiService, private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
    console.log('Login check');
    if(this.auth.isLoggedIn()){
      this.router.navigate(['dashboard']);
    }
  }

}
