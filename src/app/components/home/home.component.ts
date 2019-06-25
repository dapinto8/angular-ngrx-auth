import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../../store/auth.reducer';
import { getUserState } from 'src/app/store/auth.selector';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  user: User

  constructor(private store: Store<AuthState>, private cookieService: CookieService) { }

  ngOnInit() {
    this.store.pipe(select(getUserState)).subscribe(user => {
      this.user = user
    })
  }

  ngOnDestroy() {
    this.cookieService.delete('token')
  }

}
