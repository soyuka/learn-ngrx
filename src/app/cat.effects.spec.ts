import { AppModule } from './app.module';
import { CatEffects } from './cat.effects';
import { of, ReplaySubject, throwError } from 'rxjs';
import { concat } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { loadBreeds, getBreeds, Breed } from './cat.duck';
import { CatService } from './cat.service';

describe('Test cat effect', () => {
  let effects: CatEffects;
  let actions: ReplaySubject<any>;
  const data: Breed[] = [{id: '0', name: 'america'} as Breed, {id: '1', name: 'american'} as Breed];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        CatEffects,
        {provide: CatService, useValue: {searchBreed: (term) => of(data)}},
        provideMockActions(() => actions),
        // other providers
      ],
    });

    effects = TestBed.get(CatEffects);
  });

  it('should call api', (done) => {
    actions = new ReplaySubject(1);
    actions.next(loadBreeds({term: 'america'}));

    effects.loadBreeds$.subscribe(result => {
      console.log('test', result);
      expect(result).toEqual(getBreeds({breeds: data}));
      done();
    });
  });

  // it('should fail calling api', (cb) => {
  //   TestBed.overrideProvider(CatService, {
  //     useValue: {
  //       searchBreed: (term) => throwError(new Error('FAIL'))
  //     }
  //   });
  //   actions = new ReplaySubject(1);
  //   actions.next(loadBreeds({term: 'america'}));
  //
  //   effects.loadBreeds$.subscribe(result => {
  //     expect(result).toEqual(getBreeds({breeds: data}));
  //     cb()
  //   });
  // });
});
