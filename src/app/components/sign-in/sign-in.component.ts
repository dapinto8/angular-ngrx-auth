import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup
  submitted = false
  error = ''

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get fc() { return this.signInForm.controls }

  signIn() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value
      console.log(this.authService.signIn(email, password).finally())
    }
  }

}
