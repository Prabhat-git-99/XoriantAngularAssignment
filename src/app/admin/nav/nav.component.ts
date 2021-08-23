import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  

  constructor(private authService:AuthService, private route:Router) {

    console.log('chclin login ', localStorage.getItem('loggedIn')==="LoggedIn"?true:false, 'sss ', this.isLoggedIn )
    this.isLoggedIn = authService.isUSerLoggedIn();
    console.log(this.isLoggedIn);
  }

  isLoggedIn:boolean = localStorage.getItem('loggedIn')==="LoggedIn"?true:false;

  ngOnInit(): void {
    // this.isLoggedIn = this.authService.isUSerLoggedIn()
    // console.log( this.isLoggedIn);
  }

  signoutHandler( ) {
    console.log('chc ', this.isLoggedIn );
    this.isLoggedIn = false;
    this.authService.setUserLoggedIn( false );
    localStorage.removeItem("loggedIn");
    this.route.navigate(["admin"]);
  }

  signinHandler( ) {
    this.route.navigate(["admin/login"]);
  }

  checkSignedin() {

    return localStorage.getItem('loggedIn');
  }


}
