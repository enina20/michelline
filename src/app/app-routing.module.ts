import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertComponent } from './components/dessert/dessert.component';
import { HomeComponent } from './components/home/home.component';
import { OneDessertComponent } from './components/one-dessert/one-dessert.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent},
  { path: 'productos', component: DessertComponent },
  { path: 'producto/:id', component: OneDessertComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
