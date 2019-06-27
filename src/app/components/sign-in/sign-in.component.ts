import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup
  submitted = false
  error = ''

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) { }

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
      this.authService.signIn(email, password)
        .then(result => {
          this.router.navigate(['/home'])
        })
        .catch(error => {
          this.fc.password.setValue('')
          this.error = 'Invalid email or password'
        })
    }
  }

  onFocus() {
    this.error = null
  }

}
