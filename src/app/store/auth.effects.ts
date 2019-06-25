import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { AuthActionTypes, SignIn, SignInSuccess, SignInFailure } from './auth.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class AuthEffects {

    constructor(
        private actions: Actions, 
        private authService: AuthService,
        private cookieService: CookieService,
        private rotuer: Router
    ) { }

    @Effect()
    SignIn: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGN_IN),
        map((action: SignIn) => action.payload),
        switchMap(payload => {
            return this.authService.signIn(payload).pipe(
                map((res: any) => new SignInSuccess(res.data)),
                catchError(err => of(new SignInFailure(err.error.message)))
            )
        })
    )

    @Effect({ dispatch: false })
    SignInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGN_IN_SUCCESS),
        tap((action) => {
            this.cookieService.set('token', action.payload.token)
            this.rotuer.navigate(['/home'])
        })
    )
}