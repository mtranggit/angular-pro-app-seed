import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'schedule-controls',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-controls.component.scss'],
    template: `
        <div class="controls">
           Schedule Controls 
        </div>
    `
})
export class ScheduleControlsComponent {
    constructor() {}
}