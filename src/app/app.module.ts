import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({app: appReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }