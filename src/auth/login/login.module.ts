import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './containers/login.component';
const ROUTES: Routes = [
    {
        path: 'login', component: LoginComponent
    }
] 
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}