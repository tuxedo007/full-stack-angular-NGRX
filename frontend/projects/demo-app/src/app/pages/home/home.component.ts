import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { UsersService } from '@tuxedo-utils/user-lib';
import { CurrentUser } from '@tuxedo-utils/user-lib';
import { LoginForm } from '@tuxedo-utils/user-lib';
import { AppState } from '../../models/AppState';

import { setErrorMessage, clearErrorMessage } from '../../actions/error-message.actions';
import { selectorErrorMessage } from '../../selectors/error-message.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // observable
  public errorMessage$: Observable<string> = this.store.pipe(select(selectorErrorMessage));

  get currentUser(): CurrentUser | null {
    return this.usersSvc.getCurrentUser();
  }

  constructor(
    private usersSvc: UsersService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  doLogin(loginForm: LoginForm): void {
    // tslint:disable-next-line: deprecation
    this.usersSvc.loginEmployee(loginForm.username, loginForm.password).subscribe({
      next: () => {
        // this.errorMessage = '';
        this.store.dispatch(clearErrorMessage());
      },
      error: (err) => {
        if (err.status === 404) {
          // this.errorMessage = 'Username and password not found.';
          this.store.dispatch(setErrorMessage({ errorMessage: 'Username and password not found.'}));
        } else {
          // this.errorMessage = 'Unknown login error.';
          this.store.dispatch(setErrorMessage({ errorMessage: 'Unknown login error.'}));
        }
      }
    });
  }

  doClear(): void {
    console.log('clicked clear');
    // this.errorMessage = '';
    this.store.dispatch(clearErrorMessage());
  }

}







// import { Component, OnInit } from '@angular/core';

// import { UsersService } from '../../services/users.service';
// import { CurrentUser } from '../../models/CurrentUser';
// import { LoginForm } from '../../models/LoginForm';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   get currentUser(): CurrentUser | null {
//     return this.usersSvc.getCurrentUser();
//   }

//   constructor(private usersSvc: UsersService) { }

//   ngOnInit(): void {
//   }

//   doLogin(loginForm: LoginForm): void {
//     this.usersSvc.loginEmployee(loginForm.username, loginForm.password).subscribe();
//   }

//   doClear(): void {
//     console.log('clicked clear');
//   }

// }




// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-home',
// //   templateUrl: './home.component.html',
// //   styleUrls: ['./home.component.css']
// // })
// // export class HomeComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit(): void {
// //   }

// // }
