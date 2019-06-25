import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup
  submitted = false
  error = ''

  constructor(private fb: FormBuilder, private authService: AuthService) { }

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
      this.authService.signUp(this.signUpForm.value).subscribe(res => {
        if (res.code === 200) {

        } else {
          this.error = res.error.error
          setTimeout(() => {
            this.error = ''
          }, 5000)
        }
      })
    }
    
  }

}
