import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'list-emp',
    templateUrl: 'list-emp.component.html',
    providers: [PostsService]
})
export class ListEmpComponent  { 
  empDetails:EmpDetail[];

  constructor(private postsService: PostsService){
     this.loadEmpDetails();
  }

  loadEmpDetails(){
     this.empDetails = this.postsService.getAllEmpDetails();
  }

  remove(index:int){
    this.postsService.deleteEmpDetails(index);
    this.loadEmpDetails();
  }

  modify(index:number){
    console.log(index);
  }

}

interface EmpDetail {
    id: string;
    name: string;
    dept: string;
}

