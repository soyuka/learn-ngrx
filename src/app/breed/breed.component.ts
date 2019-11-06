import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadBreeds, Breed } from '../cat.duck';
import { State } from '../app.module';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent {
  breeds$: Observable<Breed[]> = this.store.select(state => state.cats.breeds);

  constructor(private store: Store<State>) {}

  searchBreeds(term: string) {
    this.store.dispatch(loadBreeds({term}));
  }
}
