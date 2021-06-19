import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DessertsService, dessert } from 'src/app/services/desserts.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  dessert:dessert[]=[];

  constructor( private router:Router,
               private dessertService: DessertsService) { }

  ngOnInit(): void {
    this.dessert = this.dessertService.getDesserts();
  }

  seeOneDessert(dessert:dessert){
    console.log(dessert.id);
    this.router.navigate(['/producto', dessert.id]);
  }

}
