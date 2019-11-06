import { Component, Input } from '@angular/core';
import { Cat } from '../cat.duck';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent {
  @Input() cat: Cat;
}
