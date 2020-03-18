import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createSelector, createReducer, createAction, props, on } from '@ngrx/store';
import { CatService } from './cat.service';

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
  error?: string;
}

export interface State {
  cats: CatState;
}

export const loadCats = createAction('[Cats Page] Load cats from API');
export const catsLoaded = createAction('[Cats Page] Cats loaded successfuly', props<{cats: Cat[]}>());
export const errorCats = createAction('[Cats Page] Error loading cats');

export const loadBreeds = createAction('[Cats Page] Search breed in API', props<{term: string}>());
export const breedsLoaded = createAction('[Cats Page] Load breed from API', props<{breeds: Breed[]}>());

export const initialState: CatState = { cats: [], breeds: [] };

const CatReducer = createReducer(initialState,
  on(catsLoaded, (state, {cats}) => ({...state, cats})),
  on(breedsLoaded, (state, {breeds}) => ({...state, breeds})),
  on(errorCats, state => ({...state, error: 'Error while getting cats, retry later'}))
);

export function catReducer(state: CatState, action) {
  return CatReducer(state, action);
}

@Injectable()
export class CatEffects {
  constructor(private catService: CatService, private actions$: Actions) {}

  loadCats$ = createEffect(() => this.actions$.pipe(
    ofType(loadCats),
    mergeMap(
      () => this.catService.getAll().pipe(
        tap(cats => console.log('Got cats', cats)),
        map((cats: Cat[]) => catsLoaded({cats})),
        catchError(() => of(errorCats()))
      )
    )
  ));

  loadBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(loadBreeds),
    mergeMap(
      (action) => this.catService.searchBreeds(action.term).pipe(
        map((breeds: Breed[]) => breedsLoaded({breeds})),
        catchError(() => of(errorCats()))
      )
    )
  ));
}

export const selectCatState = (state: State) => state.cats;
