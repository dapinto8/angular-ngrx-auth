import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum AuthActionTypes {
    SIGN_IN = '[Auth] Sign in',
    SIGN_IN_SUCCESS = '[Auth] Sign in success',
    SIGN_IN_FAILURE = '[Auth] Sign in failure'
}

export class SignIn implements Action {
    readonly type = AuthActionTypes.SIGN_IN
    constructor(public payload: any) { }
}

export class SignInSuccess implements Action {
    readonly type = AuthActionTypes.SIGN_IN_SUCCESS
    constructor(public payload: User) { }
} 

export class SignInFailure implements Action {
    readonly type = AuthActionTypes.SIGN_IN_FAILURE
    constructor(public payload: any) { }
} 

export type AuthActions = SignIn | SignInSuccess | SignInFailure