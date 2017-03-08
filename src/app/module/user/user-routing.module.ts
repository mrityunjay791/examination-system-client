import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './component/user.component';
//Components
export const USER_ROUTING_MODULE = RouterModule.forChild([
    {
        path: '',
        component: UserComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: "full"
    }
]);