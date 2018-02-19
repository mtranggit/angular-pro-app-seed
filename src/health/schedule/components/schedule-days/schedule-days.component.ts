import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'schedule-days',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-days.component.scss'],
    template: `
        <div class="days">
           Schedule days 
        </div>
    `
})
export class ScheduleDaysComponent {
    constructor() {}
}