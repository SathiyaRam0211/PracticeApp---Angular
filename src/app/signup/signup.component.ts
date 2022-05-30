import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder} from '@angular/forms';
import { SignupModel } from './signup.component.model';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  signupObject : SignupModel = new  SignupModel(); 
  

  signupForm : FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username : new FormControl("", Validators.required),
      email : new FormControl("", [Validators.email, Validators.required]),
      password : new FormControl("", [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
      dob : new FormControl("", Validators.required)}
    );
  }

  postUserDetails(){
   this.signupObject.username = this.signupForm.value.username;
   this.signupObject.email = this.signupForm.value.email;
   this.signupObject.password = this.signupForm.value.password;
   this.signupObject.dob = this.signupForm.value.dob;

   this.api.postUser(this.signupObject).subscribe(res=>{
     console.log(res);
     alert("User added successfully");
     this.signupForm.reset();
     this.signupForm.markAsPristine();
     this.signupForm.markAsUntouched();
   });
   
  }

  

  userSignup(){
    this.postUserDetails();
  }

}
