import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {

    isAuthenticated = false

    constructor(private router: Router, private cookieService: CookieService) { }

    canActivate() {

        const tokenExists = this.cookieService.check('token')     

        if (tokenExists) {
            return true
        } else {
            this.router.navigate(['/auth'])
            return false
        }
        
    }
}