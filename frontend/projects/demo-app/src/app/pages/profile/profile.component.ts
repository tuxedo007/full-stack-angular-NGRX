import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../models/AppState';
import { ICurrentUser, selectCurrentUser, UsersService } from '@tuxedo-utils/user-lib';
import { ChangePasswordForm } from '@tuxedo-utils/user-lib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser$: Observable<ICurrentUser> = this.store.pipe(select(selectCurrentUser));

  constructor(
    public usersSvc: UsersService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  public doChangePassword(changePasswordForm: ChangePasswordForm) {
    // tslint:disable-next-line: no-non-null-assertion
    const { username, userKind } = this.usersSvc.getCurrentUser()!;

    this.usersSvc.changePassword(
      username, userKind,
      changePasswordForm.currentPassword,
      // tslint:disable-next-line: deprecation
      changePasswordForm.newPassword).subscribe();
  }

}
