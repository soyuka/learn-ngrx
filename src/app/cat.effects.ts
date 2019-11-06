import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CatService } from './cat.service';
import { Breed, Cat, loadCats, getCats, errorCats, loadBreeds, getBreeds } from './cat.duck';

@Injectable()
export class CatEffects {

  loadCats$ = createEffect(() => this.actions$.pipe(
    ofType(loadCats),
    mergeMap(() => this.catService.getAll()
      .pipe(
        map((cats: Cat[]) => getCats({cats})),
        catchError(() => of(errorCats()))
      ))
    )
  );

  loadBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(loadBreeds),
    switchMap((action) => this.catService.searchBreed(action.term)
      .pipe(
        map((breeds: Breed[]) => getBreeds({breeds})),
        catchError(() => of(errorCats()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private catService: CatService
  ) {}
}
