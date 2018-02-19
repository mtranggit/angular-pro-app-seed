import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'schedule-calendar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-calendar.component.scss'],
    template: `
        <div class="calendar">
            {{ date | json }}
        </div>
    `
})
export class ScheduleCalendarComponent {
    @Input()
    date: Date;
    constructor() {}
}