import { Component, OnInit } from '@angular/core';
import { DessertsService, dessert } from 'src/app/services/desserts.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  dessert:dessert[]=[];

  constructor( private dessertService: DessertsService) { }

  ngOnInit(): void {
    this.dessert = this.dessertService.getDesserts();
  }

}
