import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.scss']
})
export class SocialAuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  googleAuth() {
    this.authService.googleAuth()
  }

  facebookAuth() {
    this.authService.facebookAuth()
  }

}
