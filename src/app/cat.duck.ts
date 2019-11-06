import { createAction, createReducer, on, props } from '@ngrx/store';

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Breed {
  id: string;
  name: string;
}

export interface CatState {
  cats: Cat[];
  breeds: Breed[];
  error: string;
}

export const loadCats = createAction('[Cats Page] Load cats');
export const getCats = createAction(
  '[Cats Page] Cats loaded',
  props<{ cats: Cat[] }>()
);
export const errorCats = createAction('[Cats Page] Error loading cats');
export const loadBreeds = createAction(
  '[Cats Page] Load breeds',
  props<{term: string }>()
);
export const getBreeds = createAction(
  '[Cats Page] Breeds loaded',
  props<{ breeds: Breed[] }>()
);

export const initialState: CatState = {cats: [], error: null, breeds: []};

const CatReducer = createReducer(initialState,
  on(getCats, (state, { cats }) => ({...state, cats})),
  on(getBreeds, (state, { breeds }) => ({...state, breeds})),
  on(errorCats, state => ({...state, error: 'Error while getting cats, retry later'})),
);

export function catReducer(state: CatState | undefined, action) {
  return CatReducer(state, action);
}
