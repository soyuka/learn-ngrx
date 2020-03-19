import { createAction, props, createReducer, on } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CatService } from './cat.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of } from 'rxjs';
import { mergeMap, map, catchError} from 'rxjs/operators';

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatState {
  breeds: Breed[];
  cats: Cat[];
  error?: string;
}

export interface Breed {
  id: string;
  name: string;
}

export interface State {
  cats: CatState;
}

export const loadCats = createAction('[Cats Page] Load cats');
export const apiError = createAction('[Cats Page] An error occured');
export const catsLoaded = createAction('[Cats Page] Cats loaded', props<{cats: Cat[]}>());
export const searchBreeds = createAction('[Cats Page] Search breeds', props<{term: string}>());
export const breedsLoaded = createAction('[Cats Page] Breeds loaded', props<{breeds: Breed[]}>());

export const initialState = {cats: []};

const CatReducer = createReducer(initialState,
  on(catsLoaded, (state, {cats}) => ({...state, cats, error: null})),
  on(breedsLoaded, (state, {breeds}) => ({...state, breeds, error: null})),
  on(apiError, (state) => ({...state, error: 'Cats loading error, retry later.'}))
);

export function catReducer(state: CatState, action) {
  return CatReducer(state, action);
}

@Injectable()
export class CatEffects {
  loadCats$ = createEffect(() => this.actions$.pipe(
    ofType(loadCats),
    mergeMap(() => this.catService.getAll().pipe(
      map((cats: Cat[]) => catsLoaded({cats})),
      catchError(() => of(apiError()))
    ))
  ));

  loadBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(searchBreeds),
    mergeMap((action) => this.catService.searchBreed(action.term).pipe(
      map((breeds: Breed[]) => breedsLoaded({breeds})),
      catchError(() => of(apiError()))
    ))
  ));

  constructor(private catService: CatService, private actions$: Actions) {}
}
