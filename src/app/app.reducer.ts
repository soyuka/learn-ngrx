import { createReducer, on } from '@ngrx/store';
// import {} from './app.actions';

export const initialState = 0;

const AppReducer = createReducer(initialState,
);

export function appReducer(state, action) {
  return AppReducer(state, action);
}
