import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  @ViewChild('loginForm') public loginForm !: NgForm

  form:FormGroup;
  username:string = '';
  password:string = '';
  login:boolean = false;

  constructor(private formBuilder:FormBuilder, private loginService:AuthService, private route:ActivatedRoute, private router:Router) {

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
    this.loginService.loginAdmin(data).subscribe( item => {
      console.log(item, data.password)
      if ( item[0].password === data.password) {
        console.log('inside if ')
        this.loginService.setUserLoggedIn(true);
        this.successLogin();
      }
      else {
        this.loginService.setUserLoggedIn(false);
      }
    })
  }

  successLogin() {

    this.router.navigate(['admin/products']);
  }

}
