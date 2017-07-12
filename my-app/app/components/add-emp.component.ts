import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'add-emp',
    templateUrl: 'add-emp.component.html',
    providers: [PostsService]
})
export class AddEmpComponent  { 
  emp:EmpDetail;
  addedEmp:string;

  constructor(private postsService: PostsService){
    this.clear();
  }

  clear(){
    this.emp = {id:'', name: '', dept: ''};
  }

  addEmp(myForm: NgForm) {
    this.postsService.setEmpDetails(this.emp);
    this.addedEmp = this.emp.name;
    this.clear()
  }

  removeMsg(){
    this.addedEmp = '';
  }

}

interface EmpDetail {
    id: string;
    name: string;
    dept: string;
}

