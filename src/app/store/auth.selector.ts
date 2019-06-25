import { AuthState } from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAuthState = createFeatureSelector<AuthState>('auth')
  
export const getUserState = createSelector(
    getAuthState,
    (state: AuthState) => state.user
)

export const getErrorState = createSelector(
    getAuthState,
    (state: AuthState) => state.errorMessage
)