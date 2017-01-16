import {Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail.component";
import {UserEditComponent} from "./user-edit.component";
import {UserComponent} from "./user.component";
import {UserDetailGuard} from "./userdetail.guard";

const USER_ROUTES:Routes = [
  {
    path: 'detail',
    component:UserDetailComponent,
    canActivate:[
      UserDetailGuard
    ]
  },
  {
    path: 'edit',
    component:UserEditComponent
  }
]

export const USER_CHILD_ROUTES:Routes = [
  {
    path: 'user/:id',
    component:  UserComponent,
    children: USER_ROUTES
  }
]
