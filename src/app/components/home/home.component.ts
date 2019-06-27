import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuthState().subscribe(authState => {
      this.user = authState
    })
  }

  signOut() {
    this.authService.signOut()
  }

}
