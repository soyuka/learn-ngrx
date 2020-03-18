import { Component, OnInit, Input } from '@angular/core';
import { Breed } from '../cat.duck';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent implements OnInit {
  @Input() breeds: Breed[];

  constructor() { }

  ngOnInit() {
  }

}
