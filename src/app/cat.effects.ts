import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CatService } from './cat.service';
import { Cat, loadCats, getCats, errorCats } from './cat.duck';

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

  constructor(
    private actions$: Actions,
    private catService: CatService
  ) {}
}
