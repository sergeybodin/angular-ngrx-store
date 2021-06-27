import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {StoreModule} from '@ngrx/store';

import * as fromInfo from './store/info.reducer';

import {AppComponent} from './app.component';
import {LoginComponent, ProfileComponent, StatisticsComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({info: fromInfo.reducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
