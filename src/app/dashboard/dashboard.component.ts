import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData !: any;
  constructor(private api : ApiService, private auth: AuthService) { }
  
  loginStatus:boolean = this.auth.isLoggedIn();
  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.api.getUser().subscribe(res=>{
      this.userData = res;
    })
  }

}
