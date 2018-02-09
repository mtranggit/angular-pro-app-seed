import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { MealsComponent } from './containers/meals/meals.component';

// shared module
import { SharedModule } from '../../auth/shared/shared.module';

export const ROUTES: Routes = [
    { path: '', component: MealsComponent }
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        MealsComponent
    ],
    providers: []
})
export class MealsModule {}