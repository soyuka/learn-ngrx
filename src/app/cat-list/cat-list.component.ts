import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadCats, Cat } from '../cat.duck';
import { State } from '../app.module';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats$: Observable<Cat[]> = this.store.select(state => state.cats.cats);
  constructor(private store: Store<State>) {}
  ngOnInit() {
    this.store.dispatch(loadCats());
  }
}
