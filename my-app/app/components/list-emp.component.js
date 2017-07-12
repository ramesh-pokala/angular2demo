"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var posts_service_1 = require("../services/posts.service");
var ListEmpComponent = (function () {
    function ListEmpComponent(postsService) {
        this.postsService = postsService;
        this.loadEmpDetails();
    }
    ListEmpComponent.prototype.loadEmpDetails = function () {
        this.empDetails = this.postsService.getAllEmpDetails();
    };
    ListEmpComponent.prototype.remove = function (index) {
        this.postsService.deleteEmpDetails(index);
        this.loadEmpDetails();
    };
    ListEmpComponent.prototype.modify = function (index) {
        console.log(index);
    };
    ListEmpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-emp',
            templateUrl: 'list-emp.component.html',
            providers: [posts_service_1.PostsService]
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService])
    ], ListEmpComponent);
    return ListEmpComponent;
}());
exports.ListEmpComponent = ListEmpComponent;
//# sourceMappingURL=list-emp.component.js.map