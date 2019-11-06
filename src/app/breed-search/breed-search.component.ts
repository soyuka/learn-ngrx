import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadBreeds } from '../cat.duck';
import { State } from '../app.module';

@Component({
  selector: 'app-breed-search',
  templateUrl: './breed-search.component.html',
  styleUrls: ['./breed-search.component.scss']
})
export class BreedSearchComponent implements OnInit {
  @Output() search = new EventEmitter();

  term = new FormControl('');

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.term.valueChanges.pipe(
     debounceTime(300),
     distinctUntilChanged()
    )
    .subscribe((e) => {
      this.search.next(e);
    });
  }

}
