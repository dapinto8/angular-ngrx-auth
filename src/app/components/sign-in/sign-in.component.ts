import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthState } from '../../store/auth.reducer';
import { Store } from '@ngrx/store';
import { SignIn } from 'src/app/store/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup

  constructor(private fb: FormBuilder, private store: Store<AuthState>) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get fc() { return this.signInForm.controls }

  signIn() {
    if (this.signInForm.valid) {
      this.store.dispatch(new SignIn(this.signInForm.value))
    }
  }

}
