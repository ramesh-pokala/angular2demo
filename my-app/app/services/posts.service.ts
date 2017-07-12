import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    empKey: string;

    constructor(private http: Http){
        this.empKey = 'emp';
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }

    getAllEmpDetails(){
        return JSON.parse(localStorage.getItem(this.empKey) || '[]');
    }

    getEmpDetails(index:Number){
        var empDetails = JSON.parse(localStorage.getItem(this.empKey) || '[]');
        return empDetails? empDetails[index]:{};
    }

    setEmpDetails(empInfo:object){
        var empDetails = this.getAllEmpDetails();
        empDetails.push(empInfo);
        localStorage.setItem(this.empKey, JSON.stringify(empDetails));
    }

    deleteEmpDetails(index:Number){
        var empDetails = this.getAllEmpDetails();;
        empDetails.splice(index, 1);
        localStorage.setItem(this.empKey, JSON.stringify(empDetails));
    }

    modifyEmpDetails(index:Number, empInfo:object){
        var empDetails = JSON.parse(localStorage.getItem(this.empKey));
        empDetails[0] = empInfo;
        localStorage.setItem(this.empKey, JSON.stringify(empDetails));
    }
    
}