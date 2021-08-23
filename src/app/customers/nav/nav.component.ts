import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { AuthCustomerService } from 'src/app/services/customer/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  public totalItem:number = 0;
  constructor( private cartService: CartService, private authService: AuthCustomerService, private route:Router ) {

    console.log('chclin login ', localStorage.getItem('loggedInCustomer')==="LoggedIn"?true:false, 'sss ', this.isLoggedIn )
    this.isLoggedIn = authService.isUSerLoggedIn();
    console.log(this.isLoggedIn);
  
  }


  isLoggedIn:boolean = localStorage.getItem('loggedInCustomer')==="LoggedIn"?true:false;

  ngOnInit(): void {

    this.cartService.getProducts( )
    .subscribe( res => {

      this.totalItem = res.length;

    })

  }

  signoutHandler( ) {
    console.log('chc ', this.isLoggedIn );
    this.isLoggedIn = false;
    this.authService.setUserLoggedIn( false );
    localStorage.removeItem("loggedIn");
    this.route.navigate([""]);
  }

  signinHandler( ) {
    this.route.navigate(["login"]);
  }

  checkSignedin() {

    return localStorage.getItem('loggedInCustomer');
  }


}
