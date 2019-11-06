import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadCats, Cat, CatState } from '../cat.duck';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats$: Observable<Cat[]> = this.store.select(state => state.cats);
  constructor(private store: Store<CatState>) {}
  ngOnInit() {
    this.store.dispatch(loadCats());
  }
}
