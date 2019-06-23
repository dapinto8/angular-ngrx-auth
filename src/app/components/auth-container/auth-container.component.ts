import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent implements OnInit {

  isSignIn = true
  move = true

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.move = !this.move
    setTimeout(() => {
      this.isSignIn = !this.isSignIn
    }, 100)
  }
}
