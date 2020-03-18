import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-breed-search',
  templateUrl: './breed-search.component.html',
  styleUrls: ['./breed-search.component.scss']
})
export class BreedSearchComponent implements OnInit {
  term = new FormControl('');
  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.term.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((term) => {
      this.search.next(term);
    });
  }
}
