import { User } from '../models/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState {
    user: User | null
    error: string | null
}

export const initialState: AuthState = {
    user: null,
    error: null
}

export function authReducer(state = initialState, action: AuthActions): AuthState {
    switch(action.type) {
        case AuthActionTypes.SIGN_IN_SUCCESS: {
            return {
                ...state,
                user: action.payload
            }
        }
        case AuthActionTypes.SIGN_IN_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}