import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private api: ApiService) { }

  storedPassword : any;

  setToken(token: string): void{
    localStorage.setItem('token',token);
  }

  getToken() : string | null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logOut(){
    console.log('logOut auth working.');
    localStorage.removeItem('token');
    this.router.navigate(['../login']);  
  }

  logIn(username : string, password : any){
    this.api.getIndividualUser(username).subscribe(res=>{
      this.storedPassword = res[0].password;
      if(this.storedPassword == password){
         this.setToken('abcdefghijklmnopqrs');
         this.router.navigate(['dashboard']);
         console.log("Login successful.")
       } else{
         alert("Incorrect credentials.");
       }
    });
  }

}
