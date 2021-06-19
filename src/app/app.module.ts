import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DessertComponent } from './components/dessert/dessert.component';
import { MenuComponent } from './components/menu/menu.component';
import { TeamComponent } from './components/team/team.component';
import { OneDessertComponent } from './components/one-dessert/one-dessert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DessertComponent,
    MenuComponent,
    TeamComponent,
    OneDessertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
