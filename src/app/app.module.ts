import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { TextBoxComponent } from './bemby-ui/text-box/text-box.component';
import { BembyUiModule } from './bemby-ui/bemby-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    BembyUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
