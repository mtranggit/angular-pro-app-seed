import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'health',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'meals'},
            { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule' },
            { path: 'meals', loadChildren: './meals/meals.module#MealsModule' },
            { path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsModule' }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class HealthModule {}