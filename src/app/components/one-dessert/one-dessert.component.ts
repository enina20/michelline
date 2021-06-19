import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DessertsService, dessert } from 'src/app/services/desserts.service';

@Component({
  selector: 'app-one-dessert',
  templateUrl: './one-dessert.component.html',
  styleUrls: ['./one-dessert.component.css']
})
export class OneDessertComponent {

  dessert:any={};

  constructor( private activatedRoute: ActivatedRoute,
               private dessertService:DessertsService) {
    this.activatedRoute.params.subscribe( params => {
      console.log('one', params['id']);
      this.dessert = dessertService.getDessert(params['id']);

    });
  }


}
