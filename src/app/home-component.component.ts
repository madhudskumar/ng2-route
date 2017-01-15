import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, Observable} from "rxjs";
import 'rxjs/add/operator/map'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'route-home-component',
  template: `
    <p>
      home-component
    </p>
    <hr>
    {{analytics | async}}
  `,
  styles: []
})
export class HomeComponentComponent implements OnInit{
  private analytics:Observable<string>;
  constructor(private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.analytics = this.activatedRoute.queryParams.map(params => params['analytics'] || 'none')
  }
}
