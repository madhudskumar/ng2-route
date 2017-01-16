import {UserComponent} from "./user/user.component";
import {HomeComponentComponent} from "./home-component.component";
import {RouterModule, Routes} from "@angular/router"
import {USER_CHILD_ROUTES} from "./user/user.routes";


const APP_ROUTES: Routes = [
  {
    path: 'user/:id',
    component:  UserComponent,
  },
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path:'user',
    redirectTo:'/user/7',
    pathMatch:'full'
  }
];


export const APP_ROUTES_PATH = RouterModule.forRoot(APP_ROUTES);
export const USER_CHILD_ROUTES_PATH = RouterModule.forChild(USER_CHILD_ROUTES);
