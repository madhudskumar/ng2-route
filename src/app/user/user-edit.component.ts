import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ComponentCanDeactivate} from "./user-edit.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'route-user-edit',
  template: `
    <p>
      user-edit Works!
    </p>
    <button (click)="done = true">Done</button>
    <button class="btn btn-danger" (click)="onNav()"> go deactivate</button>
  `,
  styles: []
})
export class UserEditComponent implements OnInit, ComponentCanDeactivate {
  done = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | boolean{
    if(!this.done){
      return confirm('do u want to navi?');
    }else{
      return true;
    }
  }

  onNav(){
    this.router.navigate(['/']);
  }
}
