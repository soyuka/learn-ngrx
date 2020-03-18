import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './app.counter';

export const initialState = 0;

const AppReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function appReducer(state, action) {
  return AppReducer(state, action);
}
