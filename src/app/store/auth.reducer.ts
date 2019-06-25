import { User } from '../models/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState {
    user: User | null
    errorMessage: string | null
}

export const initialState: AuthState = {
    user: null,
    errorMessage: null
}

export function authReducer(state = initialState, action: AuthActions): AuthState {
    switch(action.type) {
        case AuthActionTypes.SIGN_IN_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                errorMessage: null
            }
        }
        case AuthActionTypes.SIGN_IN_FAILURE: {
            return {
                ...state,
                user: null,
                errorMessage: action.payload
            }
        }
        default: {
            return state
        }
    }
}