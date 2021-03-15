import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ICurrentUser, UsersService, selectCurrentUser, loginUser } from '@tuxedo-utils/user-lib';
import { LoginForm } from '@tuxedo-utils/user-lib';
import { AppState } from '../../models/AppState';

import { setErrorMessage, clearErrorMessage } from '@tuxedo-utils/shared-lib';
import { selectorErrorMessage } from '../../selectors/error-message.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // observable
  public errorMessage$: Observable<string> = this.store.pipe(select(selectorErrorMessage));

  public currentUser$: Observable<ICurrentUser> = this.store.pipe(select(selectCurrentUser));

  constructor(
    private usersSvc: UsersService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  doLogin(loginForm: LoginForm): void {

    this.store.dispatch(loginUser({ username: loginForm.username, password: loginForm.password }));

    // // tslint:disable-next-line: deprecation
    // this.usersSvc.loginEmployee(loginForm.username, loginForm.password).subscribe({
    //   next: () => {
    //     // this.errorMessage = '';
    //     this.store.dispatch(clearErrorMessage());
    //   },
    //   error: (err) => {
    //     if (err.status === 404) {
    //       // this.errorMessage = 'Username and password not found.';
    //       this.store.dispatch(setErrorMessage({ errorMessage: 'Username and password not found.'}));
    //     } else {
    //       // this.errorMessage = 'Unknown login error.';
    //       this.store.dispatch(setErrorMessage({ errorMessage: 'Unknown login error.'}));
    //     }
    //   }
    // });
  }

  doClear(): void {
    console.log('clicked clear');
    // this.errorMessage = '';
    this.store.dispatch(clearErrorMessage());
  }

}
