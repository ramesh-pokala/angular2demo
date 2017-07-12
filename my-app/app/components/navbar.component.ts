import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent  {
    header_title: string;

    constructor(){
      //this.header_title = "This is an about page!"
      console.log("Navbar loaded")
    }
    
 }
