import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared module
import { SharedModule } from './shared/shared.module';
import { FirebaseAppConfigToken } from 'angularfire2/app';

export const ROUTES: Routes = [
    { 
        path: 'auth', 
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
        ]

    }
];


// Initialize Firebase
export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBR_U8cGcmX4hYBXXrQowjKPma2tAc25X4",
    authDomain: "fitness-app-3da67.firebaseapp.com",
    databaseURL: "https://fitness-app-3da67.firebaseio.com",
    projectId: "fitness-app-3da67",
    storageBucket: "fitness-app-3da67.appspot.com",
    messagingSenderId: "435325683141"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
    declarations: [],
    providers: []
})
export class AuthModule {}