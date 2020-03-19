import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-breed-search',
  templateUrl: './breed-search.component.html',
  styleUrls: ['./breed-search.component.scss']
})
export class BreedSearchComponent implements OnInit {
  @Output() search = new EventEmitter();

  term = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.term.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((e) => {
      this.search.next(e);
    });
  }
}
