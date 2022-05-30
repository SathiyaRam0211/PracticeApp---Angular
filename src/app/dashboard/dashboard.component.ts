import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData !: any;
  constructor(private api : ApiService) { }
  

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.api.getUser().subscribe(res=>{
      this.userData = res;
    })
  }

}
