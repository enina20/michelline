import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DessertsService, dessert } from 'src/app/services/desserts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dessert:dessert[]=[];

  constructor( private router:Router,
               private dessertService: DessertsService) { }

  ngOnInit(): void {
    this.dessert = this.dessertService.getDesserts();
    this.dessert = this.dessert.filter(function(dessert) { return dessert.id <= 6 });
  }

  seeOneDessert(dessert:dessert){
    console.log(dessert.id);
    this.router.navigate(['/producto', dessert.id]);
  }
}
