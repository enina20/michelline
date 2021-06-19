import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  private desserts:dessert[] = [
    {
      id: 1,
      nombre: "Torta de cacao negro",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/d1.jpg",
      precio:"35 $"
    },
    {
      id: 2,
      nombre: "Torta de cacao negro",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/d2.jpg",
      precio:"95 $"
    },
    {
      id: 3,
      nombre: "Torta de cacao negro",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/d3.jpg",
      precio:"65 $"
    },
    {
      id: 4,
      nombre: "Torta de cacao negro",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/d4.jpg",
      precio:"75 $"
    },
    {
      id: 5,
      nombre: "Torta de cacao negro Verde",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/d5.jpg",
      precio:"25 $"
    },
    {
      id: 6,
      nombre: "Torta de cacao negro-Man",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/d6.jpg",
      precio:"45 $"
    },
    {
      id: 7,
      nombre: "Torta de cacao negro",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/m1.png",
      precio:"30 $"
    },
    {
      id: 8,
      nombre: "Torta de cacao negro Verde",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/m2.png",
      precio:"70 $"
    },
    {
      id: 9,
      nombre: "Torta de cacao negro-Man",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/m3.png",
      precio:"90 $"
    },
    {
      id: 10,
      nombre: "Torta de cacao negro",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/m4.png",
      precio:"120 $"
    },
    {
      id: 11,
      nombre: "Torta de cacao negro-Man",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/m4.png",
      precio:"65 $"
    },
    {
      id: 12,
      nombre: "Torta de cacao negro",
      descripcion: "Torta a base de dulce de leche y cacao negro del amazonas",
      img: "assets/images/m5.png",
      precio:"35 $"
    }
  ];

  constructor() { }


  getDesserts(){
    return this.desserts
  }

  getDessert( id: number){
    return this.desserts[id-1]
  }
}

export interface dessert{
  id: number,
  nombre:string;
  descripcion:string;
  img:string;
  precio:string;
}
