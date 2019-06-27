import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup
  submitted = false
  error = null

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get fc() { return this.signUpForm.controls }

  signUp() {
    this.submitted = true

    if (this.signUpForm.valid) {
      const { name, email, password } = this.signUpForm.value
      this.authService.signUp(email, password)
        .then(result => {
          result.user.updateProfile({ displayName: name })
          this.authService.createUser(result.user)
        })
        .catch(error => {
          this.error = 'Email address already exists'
        })
    }
  }

  onFocus() {
    if (this.error) {
      this.error = null
    }
  }

}
