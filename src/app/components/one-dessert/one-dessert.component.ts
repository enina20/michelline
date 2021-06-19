import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-dessert',
  templateUrl: './one-dessert.component.html',
  styleUrls: ['./one-dessert.component.css']
})
export class OneDessertComponent {

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);

    });
  }


}
