import { UserLibState } from '@tuxedo-utils/user-lib';

export interface AppState {
  errorMessage: string;
  user: UserLibState;
}
