import { Component, Input } from '@angular/core';
import { Breed } from '../cat.duck';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent {
  @Input() breeds: Breed[];
}
