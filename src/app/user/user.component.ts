import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, NavigationExtras} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'route-user',
  template: `
    <p>
      user Works!
    </p>
    <h1>Back Home</h1>
     <button (click)="goHome()">go home</button>
     <hr>
     <router-outlet></router-outlet>
     {{id}}
  `,
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {
  id:string;
  private subscription:Subscription;

  constructor(private router:Router, private  activatedRoute:ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (params: any) => this.id = params['id']
    )
  }

  ngOnInit() {
  }

  goHome(){
    let x = 100;
    let homeComponentNavigationExtras:NavigationExtras = {
      queryParams:{'analytics':x}
    }
      this.router.navigate(['/'], homeComponentNavigationExtras)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
