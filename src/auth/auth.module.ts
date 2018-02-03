import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    { 
        path: 'auth', 
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
        ]

    }
]
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [],
    providers: []
})
export class AuthModule {}