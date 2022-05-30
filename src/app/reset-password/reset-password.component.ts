import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ResetPasswordModel } from './reset-password.component.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  userData : any;
  username : string = "";
  resetpasswordForm : FormGroup = new FormGroup({});
  resetpasswordObject : ResetPasswordModel = new  ResetPasswordModel(); 

  constructor(private formBuilder:FormBuilder, private api:ApiService) {
     
   }

  ngOnInit(): void {
    this.resetpasswordForm = this.formBuilder.group({
      username : new FormControl("", Validators.required),
      oldPassword : new FormControl("", [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
      newPassword : new FormControl("", [Validators.required, Validators.maxLength(16), Validators.minLength(8)])
    });
  }

  
  resetPassword(){
    this.username = this.resetpasswordForm.value.username;
    this.api.getIndividualUser(this.username).subscribe(res=>{
      console.log(res[0].id);
      this.resetpasswordObject.username = this.resetpasswordForm.value.username;
      this.resetpasswordObject.email = res[0].email;
      this.resetpasswordObject.password = this.resetpasswordForm.value.newPassword;
      this.resetpasswordObject.dob = res[0].dob;
      
      this.api.updateUser(this.resetpasswordObject, res[0].id).subscribe(res=>{
        console.log(res);
        alert("Password reset successfully");
        this.resetpasswordForm.reset();
        this.resetpasswordForm.markAsPristine();
        this.resetpasswordForm.markAsUntouched();
      })
    });  
  }


  userResetPassword(){
    console.warn(this.resetpasswordForm.value);
    this.resetPassword();
  }

}
