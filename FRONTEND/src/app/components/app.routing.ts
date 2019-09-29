import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { LoginComponent } from "./login/login.component";

import {HomeComponent} from './home/home.component';
 
const appRoutes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'home',component: HomeComponent},
    {path: 'login' , component: LoginComponent},
    {path: '**' , component:HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);