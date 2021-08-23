import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class AuthGuardAdminService implements CanActivate {

    constructor(private authService:AuthService, private router:Router) {


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
            this.router.navigate(['admin/login'])
            return false;
        }
    }
}