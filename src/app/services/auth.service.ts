import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class AuthService {

    env = environment

    constructor(private http: HttpClient) { }

    signUp(data) {
        return this.http.post(`${this.env.apiUrl}/auth/signUp`, data).pipe(
            map(res => res),
            catchError(err => of(err))
        )
    }

    signIn(data) {
        return this.http.post(`${this.env.apiUrl}/auth/signIn`, data)
    }

} 