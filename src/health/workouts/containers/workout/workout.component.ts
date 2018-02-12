import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'workout',
    styleUrls: ['workout.component.scss'],
    template: `
        <div class="workout">
            <div class="workout__title" >
                <h1>
                    <img src="/img/food.svg">
                    <span *ngIf="workout$ | async as workout; else title;">
                        {{ workout && workout.name ? 'Edit' : 'Create'}} workout
                    </span>
                    <ng-template #title>
                        Loading...
                    </ng-template>
                </h1>
            </div>
            <div *ngIf="workout$ | async as workout; else loading;">
                <workout-form 
                    [workout]="workout"
                    (create)="addWorkout($event)"
                    (update)="updateWorkout($event)"
                    (remove)="deleteWorkout($event)"
                >

                </workout-form>
            </div>
            <ng-template #loading>
                <div class="message">
                    <img src="/img/loading.svg">
                    Fetching workout...
                </div>
            </ng-template>
        </div>
    `
})
export class WorkoutComponent implements OnInit, OnDestroy {

    workout$: Observable<Workout>;
    subscription: Subscription;

    constructor(
        private workoutsService: WorkoutsService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.subscription = this.workoutsService.workouts$.subscribe();    
        this.workout$ = this.route.params
            .switchMap( param => this.workoutsService.getWorkout(param.id));
        
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    async addWorkout(event: Workout) {
        await this.workoutsService.addWorkout(event);
        this.backToWorkouts();
    }

    async updateWorkout(event: Workout) {
        const key = this.route.snapshot.params.id;
        await this.workoutsService.updateWorkout(key, event);
        this.backToWorkouts();
    }

    async deleteWorkout(event: Workout) {
        const key = this.route.snapshot.params.id;
        await this.workoutsService.removeWorkout(key);
        this.backToWorkouts();
    }

    backToWorkouts() {
        this.router.navigate(['health/workouts']);
    }
}