import { createFeatureSelector } from '@ngrx/store';
import { AuthState, authReducer } from './auth.reducer';

export interface AppState {
  authState: AuthState
}

export const reducers = {
  auth: authReducer
};

export const getAuthState = createFeatureSelector<AppState>('auth')