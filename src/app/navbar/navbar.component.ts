import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() buttonStatus: boolean;
  constructor(private router: Router, private auth: AuthService) { }
  
  onLogout(){
    console.log('clicked');
    this.auth.logOut();
  }

  ngOnInit(): void {
  }
}
