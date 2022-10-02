import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserServiceComponent } from './services/user-service/user-service.component';
import { AccountServiceComponent } from './services/account-service/account-service.component';
import { OperationServiceComponent } from './services/operation-service/operation-service.component';
import { AccountComponent } from './account/account/account.component';
import { OperationComponent } from './operation/operation/operation.component';
import { UserComponent } from './user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserServiceComponent,
    AccountServiceComponent,
    OperationServiceComponent,
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
