import { Component, OnInit } from '@angular/core';
import { CatState, Cat, loadCats, selectCatState, State } from '../cat.duck';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats$: Observable<Cat[]>;

  constructor(private store: Store<State>) {
    this.cats$ = this.store.pipe(select(selectCatState), select('cats'));
  }

  loadCats() {
    this.store.dispatch(loadCats());
  }

  ngOnInit() {
    this.store.dispatch(loadCats());
  }
}
