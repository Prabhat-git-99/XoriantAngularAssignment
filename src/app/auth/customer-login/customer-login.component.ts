import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthCustomerService } from 'src/app/services/customer/auth/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  @ViewChild('loginForm') public loginForm !: NgForm

  form:FormGroup;
  username:string = '';
  password:string = '';
  login:boolean = false;

  constructor(private formBuilder:FormBuilder, private loginService:AuthCustomerService, private route:ActivatedRoute, private router:Router) {

    this.form = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }


  submit( ):void {

    const data = {

      username: this.form.value.username,
      password: this.form.value.password

    }

    console.log('in login ', data );
    this.loginService.loginUser(data).subscribe( item => {
      console.log(item, data.password)
      if ( item[0].password === data.password) {
        console.log('inside if ')
        this.loginService.setUserLoggedIn(true);
        localStorage.setItem('loggedInCustomerMail', data.username);
        // this.router.navigate(['/']);
        this.navigateToHome();
      }
      else {
        this.loginService.setUserLoggedIn(false);
      }
    })

    
  }
  navigateToHome() {

    this.router.navigate(['/']);
  }

}
