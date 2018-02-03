import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './containers/register.component';

const ROUTES: Routes = [
    { path: 'register', component: RegisterComponent }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        RegisterComponent
    ]
})
export class RegisterModule {}