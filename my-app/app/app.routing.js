"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dash_board_component_1 = require("./components/dash-board.component");
var list_emp_component_1 = require("./components/list-emp.component");
var add_emp_component_1 = require("./components/add-emp.component");
var modify_emp_component_1 = require("./components/modify-emp.component");
var appRoutes = [
    {
        path: '',
        component: dash_board_component_1.DashBoardComponent
    },
    {
        path: 'list',
        component: list_emp_component_1.ListEmpComponent
    },
    {
        path: 'add',
        component: add_emp_component_1.AddEmpComponent
    },
    {
        path: 'modify/:index',
        component: modify_emp_component_1.ModifyEmpComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map