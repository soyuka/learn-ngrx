import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './app.reducer';
import { counterReducer } from './counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { CatComponent } from './cat/cat.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CatEffects, catReducer } from './cat.duck';
import { BreedSearchComponent } from './breed-search/breed-search.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedComponent } from './breed/breed.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CatComponent,
    CatListComponent,
    BreedSearchComponent,
    BreedListComponent,
    BreedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([CatEffects]),
    ReactiveFormsModule,
    StoreModule.forRoot({app: appReducer, count: counterReducer, cats: catReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
