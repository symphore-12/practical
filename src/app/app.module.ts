import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},{
  path: 'contact',
  component: ContactComponent
}]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent,HomeComponent,AboutComponent,ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
