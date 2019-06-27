import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    isAuthenticated = false

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {

        this.authService.getAuthState().subscribe(authState => {
            if (authState) {
                return true
            } else {
                this.router.navigate(['/auth'])
                return false
            }
        })

        return true
        
    }
}