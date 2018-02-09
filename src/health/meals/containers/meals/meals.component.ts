import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Store } from 'store';

@Component({
    selector: 'meals',
    styleUrls: ['meals.component.scss'],
    template: `
        <div>
           Meals 
           {{ meals | async | json }}
        </div>
    `
})
export class MealsComponent implements OnInit, OnDestroy {
    meals$: Observable<Meal[]>;
    subscription: Subscription;

    constructor(
        private mealsService: MealsService,
        private store: Store
    ) {}

    ngOnInit() {
        this.subscription = this.mealsService.meals$.subscribe();
        this.meals$ = this.store.select('meals');
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
