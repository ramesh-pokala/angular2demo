import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { NavbarComponent }  from './components/navbar.component';
import { DashBoardComponent }  from './components/dash-board.component';
import { ListEmpComponent }  from './components/list-emp.component';
import { AddEmpComponent }  from './components/add-emp.component';
import {ModifyEmpComponent} from './components/modify-emp.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, NavbarComponent, ListEmpComponent, DashBoardComponent, AddEmpComponent, ModifyEmpComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
