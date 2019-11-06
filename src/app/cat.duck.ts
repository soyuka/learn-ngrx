import { createAction, createReducer, on, props } from '@ngrx/store';

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatState {
  cats: Cat[];
  error: string;
}

export const loadCats = createAction('[Cats Page] Load cats');
export const getCats = createAction(
  '[Cats Page] Cats Loaded Success',
  props<{ cats: Cat[] }>()
);
export const errorCats = createAction('[Cats Page] Error loading cats');

export const initialState: CatState = {cats: [], error: null};

const CatReducer = createReducer(initialState,
  on(getCats, (state, { cats }) => ({cats})),
  on(errorCats, state => ({...state, error: 'Error while getting cats, retry later'})),
);

export function catReducer(state: CatState | undefined, action) {
  return CatReducer(state, action);
}
