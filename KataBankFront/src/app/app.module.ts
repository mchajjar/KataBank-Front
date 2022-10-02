import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserServiceComponent } from './services/user-service/user-service.component';
import { AccountServiceComponent } from './services/account-service/account-service.component';
import { OperationServiceComponent } from './services/operation-service/operation-service.component';

@NgModule({
  declarations: [
    AppComponent,
    UserServiceComponent,
    AccountServiceComponent,
    OperationServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
