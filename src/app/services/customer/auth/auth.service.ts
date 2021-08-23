import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { User } from 'src/app/interfaces/user';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthCustomerService {

  apiUrl = "http://localhost:3000/users";

  isLoggedIn:boolean = false;

  constructor(private http: HttpClient) { }


  loginUser( data:any ):Observable<User[]> {

    console.log( data );
    // if ( )
    return this.http.get<User[]>(`${this.apiUrl}?email=${data.username}&password=${data.password}`);
    // return newData;
  }

  setUserLoggedIn(value:boolean) {

    this.isLoggedIn = value;
    localStorage.setItem('loggedInCustomer', value?'LoggedIn':'');

  }
  isUSerLoggedIn() {
    if ( localStorage.getItem('loggedInCustomer') === 'LoggedIn' ) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn
  }

}
