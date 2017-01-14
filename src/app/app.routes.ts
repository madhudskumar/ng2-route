import {UserComponent} from "./user/user.component";
import {HomeComponentComponent} from "./home-component.component";
import {RouterModule} from "@angular/router"

const APP_ROUTES = [
  { path: 'user', component:  UserComponent },
  { path: '', component: HomeComponentComponent}
];

export const APP_ROUTES_PATH = RouterModule.forRoot(APP_ROUTES);
