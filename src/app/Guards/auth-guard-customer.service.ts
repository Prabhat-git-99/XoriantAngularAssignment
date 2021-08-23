import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
// import { AuthService } from "../services/auth/auth.service";
import { AuthCustomerService } from "../services/customer/auth/auth.service";

@Injectable()
export class AuthGuardCustomerService implements CanActivate {

    constructor(private authService:AuthCustomerService, private router:Router) {


    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {

        // console.log('auth guard ', )
        // this.authService.
        // return true
        if ( this.authService.isUSerLoggedIn() ) {
            return true;
        }
        else {
            window.alert('Permission Denied!')
            this.router.navigate(['login'])
            return false;
        }
    }
}