import { Component } from '@angular/core';
import { State, Breed, searchBreeds } from '../cat.duck';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent {
  breeds$: Observable<Breed[]>;

  constructor(private store: Store<State>) {
    this.breeds$ = this.store.pipe(select('cats'), select('breeds'));
  }

  searchBreeds(term: string) {
    this.store.dispatch(searchBreeds({term}));
  }
}
