import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

}
