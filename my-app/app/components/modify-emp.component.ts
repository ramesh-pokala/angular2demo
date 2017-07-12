import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'modify-emp',
    templateUrl: 'modify-emp.component.html',
    providers: [PostsService]
})
export class ModifyEmpComponent  { 
  emp:EmpDetail;
  addedEmp:string;
  empIndex:number;

  constructor( private route: ActivatedRoute, private postsService: PostsService){ // private postsService: PostsService,
    this.empIndex = this.route.snapshot.params.index:
    if(this.empIndex){
      this.emp = this.postsService.getEmpDetails(this.empIndex);
    }
  }

  saveEmp(myForm: NgForm) {
    this.postsService.modifyEmpDetails(this.empIndex, this.emp);
    this.addedEmp = this.emp.name;
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

