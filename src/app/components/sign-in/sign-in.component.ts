import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthState } from '../../store/auth.reducer';
import { Store, select } from '@ngrx/store';
import { SignIn, SignInFailure } from 'src/app/store/auth.actions';
import { getErrorState } from 'src/app/store/auth.selector';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup
  submitted = false
  error = ''

  constructor(private fb: FormBuilder, private store: Store<AuthState>) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    this.store.pipe(select(getErrorState)).subscribe(error => {
      this.error = error
      if (error) {
        this.signInForm.controls.password.setValue('')
        setTimeout(() => {
          this.store.dispatch(new SignInFailure(null))
        }, 5000)
      }
    })

  }

  get fc() { return this.signInForm.controls }

  signIn() {
    if (this.signInForm.valid) {
      this.store.dispatch(new SignIn(this.signInForm.value))
    }
  }

}
