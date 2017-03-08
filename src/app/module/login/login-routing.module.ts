import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//Components
export const LOGIN_ROUTING_MODULE = RouterModule.forChild([
    {
        path: '',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: "full"
    }
]);