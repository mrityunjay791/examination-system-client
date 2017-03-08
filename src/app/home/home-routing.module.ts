import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
/**
 * Main app routing i.e. for root
 * @export
 * @class AppRoutingModule
 */
export const HOME_ROUTING_MODULE =
    RouterModule.forChild([
        {
            path: '',
            component: HomeComponent
        }
    ]);