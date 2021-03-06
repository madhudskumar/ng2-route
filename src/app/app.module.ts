import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import {APP_ROUTES_PATH, USER_CHILD_ROUTES_PATH} from "./app.routes";
import {UserDetailGuard} from "./user/userdetail.guard";
import {UserEditGuard} from "./user/user-edit.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
  ],
  imports: [
    APP_ROUTES_PATH,
    USER_CHILD_ROUTES_PATH,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ UserDetailGuard , UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
