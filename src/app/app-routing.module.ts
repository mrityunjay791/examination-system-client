import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
/**
 * Main app routing i.e. for root
 * @export
 * @class AppRoutingModule
 */
export const APP_ROUTING_MODULE =
    RouterModule.forRoot([
        {
            path: '',
            loadChildren: './home/home.module#HomeModule'
        },
        {
            path: 'user',
            loadChildren: './module/user/user.module#UserModule'
        },
        {
            path: 'login',
            loadChildren: './module/login/login.module#LoginModule'
        },
        {
            path: 'administration',
            loadChildren: './administration/administration.module#AdministrationModule'
        }
    ]);