import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedSearchComponent } from './breed-search.component';

describe('BreedSearchComponent', () => {
  let component: BreedSearchComponent;
  let fixture: ComponentFixture<BreedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
