import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { AuthActionTypes, SignIn, SignInSuccess, SignInFailure } from './auth.actions';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()

export class AuthEffects {

    constructor(private actions: Actions, private authService: AuthService) { }

    @Effect()
    SignIn: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGN_IN),
        map((action: SignIn) => action.payload),
        switchMap(payload => {
            return this.authService.signIn(payload).pipe(
                map(res => new SignInSuccess(res.data)),
                catchError(err => of(new SignInFailure(err)))
            )
        })
    )
}