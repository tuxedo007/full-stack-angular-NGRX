import { createReducer, on } from '@ngrx/store';
import { setErrorMessage, clearErrorMessage } from '@tuxedo-utils/shared-lib';

export const initialState: Readonly<string> = '';

export const errorMessageReducer = createReducer(
  initialState,
  on(clearErrorMessage, () => ''),
  on(setErrorMessage, (_, { errorMessage }) => errorMessage),
  //  Types of property 'reducer' are incompatible. - if uncommented
  on(clearErrorMessage, () => ''),
);


// export const errorMessageReducer = createReducer(
//   initialState,
//   on(setErrorMessage, ( { errorMessage }) => errorMessage),
//   on(clearErrorMessage, () => ''),
// );

