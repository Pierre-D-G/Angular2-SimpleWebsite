import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from  './app.routing';

import { AppComponent }  from './app.component';
import { NavbarComponent} from './components/Navigation/navigation.component';
import { JumbotronComponent } from './components/Jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  JumbotronComponent,
                  HomeComponent,
                  AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
