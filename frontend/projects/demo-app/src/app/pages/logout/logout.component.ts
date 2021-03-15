import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { logoutUser, UsersService } from '@tuxedo-utils/user-lib';
import { AppState } from '../../models/AppState';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private usersSvc: UsersService,
    private router: Router,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.usersSvc.logoutUser();
    this.store.dispatch(logoutUser());
    this.router.navigateByUrl('/');
  }

}

