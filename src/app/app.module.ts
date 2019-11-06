import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './app.reducer';
import { counterReducer } from './counter/counter.duck';
import { CounterComponent } from './counter/counter.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatComponent } from './cat/cat.component';
import { CatEffects } from './cat.effects';
import { catReducer, CatState } from './cat.duck';

export interface State {
  app: any;
  count: any;
  cats: CatState;
}

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CatListComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([CatEffects]),
    StoreModule.forRoot({app: appReducer, count: counterReducer, cats: catReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
