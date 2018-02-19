import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';

// components
import { ListItemComponent } from '../shared/components/list-item/list-item.component';

// services
import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.service';
import { ScheduleService } from './services/schedule/schedule.service';

// pipes
import { WorkoutPipe } from './pipes/workout.pipe';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ],
    declarations: [
        ListItemComponent,
        WorkoutPipe,
        JoinPipe
    ],
    exports: [
        ListItemComponent,
        WorkoutPipe,
        JoinPipe
    ],
    providers: []
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService,
                WorkoutsService,
                ScheduleService
            ]
        }
    }
}