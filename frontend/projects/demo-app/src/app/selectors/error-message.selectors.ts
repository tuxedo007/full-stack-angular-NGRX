import { createSelector } from '@ngrx/store';
import { AppState } from '../models/AppState';

export const selectorErrorMessage = createSelector(
  (state: AppState) => state.errorMessage,
  (errorMessage: string) => errorMessage,
);

