import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// components
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutTypeComponent } from './components/workout-type/workout-type.component';

// containers
import { WorkoutComponent } from './containers/workout/workout.component';
import { WorkoutsComponent } from './containers/workouts/workouts.component';

// shared module
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
    { path: '', component: WorkoutsComponent },
    { path: 'new', component: WorkoutComponent },
    { path: ':id', component: WorkoutComponent }
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        WorkoutComponent,
        WorkoutsComponent,
        WorkoutFormComponent,
        WorkoutTypeComponent
    ],
    providers: []
})
export class WorkoutsModule {}