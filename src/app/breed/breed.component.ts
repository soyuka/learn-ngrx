import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State, Breed, selectCatState, loadBreeds } from '../cat.duck';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent {
  breeds$: Observable<Breed[]>;

  constructor(private store: Store<State>) {
    this.breeds$ = this.store.pipe(select(selectCatState), select('breeds'));
  }

  searchBreed(term: string) {
    this.store.dispatch(loadBreeds({term}));
  }
}
