import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './app.reducer';
import { catReducer, CatEffects } from './cat.duck';
import { CounterComponent } from './counter/counter.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatComponent } from './cat/cat.component';
import { BreedSearchComponent } from './breed-search/breed-search.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { BreedComponent } from './breed/breed.component';
import { BreedListComponent } from './breed-list/breed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CatListComponent,
    CatComponent,
    BreedSearchComponent,
    BreedComponent,
    BreedListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({count: appReducer, cats: catReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production  }),
    EffectsModule.forRoot([CatEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
