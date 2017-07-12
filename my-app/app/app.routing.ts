import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashBoardComponent} from './components/dash-board.component';
import {ListEmpComponent} from './components/list-emp.component';
import {AddEmpComponent} from './components/add-emp.component';
import {ModifyEmpComponent} from './components/modify-emp.component';

const appRoutes: Routes = [
    {
        path:'',
        component: DashBoardComponent
    },
    {
        path: 'list',
        component: ListEmpComponent
    },
    {
        path: 'add',
        component: AddEmpComponent
    },
    {
        path: 'modify/:index',
        component: ModifyEmpComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);