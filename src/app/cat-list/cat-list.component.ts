import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CatState, Cat, loadCats, State } from '../cat.duck';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats$: Observable<Cat[]>;

  constructor(private store: Store<State>) {
    this.cats$ = this.store.pipe(select('cats'), select('cats'), tap(cats => {
      console.log('cats', cats);
    }));
  }

  loadCats() {
    this.store.dispatch(loadCats());
  }

  ngOnInit() {
    this.store.dispatch(loadCats());
  }
}
