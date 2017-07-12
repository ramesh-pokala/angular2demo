import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'dash-board',
  templateUrl: 'dash-board.component.html',
  providers: [PostsService]
})
export class DashBoardComponent  {
    empNum:Number;
    constructor(private postsService: PostsService){
        var emp = this.postsService.getAllEmpDetails();
        this.empNum = emp? emp.length: 0;
    }
    
 }
