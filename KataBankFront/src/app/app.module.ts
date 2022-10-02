import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountComponent} from "./Account/account/account.component";
import {OperationComponent} from "./Operation/operation/operation.component";
import {UserComponent} from "./User/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    OperationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
