import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-nav.component.scss'],
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="health/schedule" routerLinkActive="active">Schedule</a>
                <a routerLink="health/meals" routerLinkActive="active">Meals</a>
                <a routerLink="health/workouts" routerLinkActive="active">Workouts</a>
            </div>
        </div>
    `
})
export class AppNavComponent {
    constructor() {}
}