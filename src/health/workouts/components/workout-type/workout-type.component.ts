import { Component, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TYPE_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WorkoutTypeComponent),
    multi: true
}

@Component({
    selector: 'workout-type',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['workout-type.component.scss'],
    providers: [TYPE_CONTROL_ACCESSOR],
    template: `
        <div class="workout-type">
           <div class="workout-type__pane"
                *ngFor="let selector of selectors"
                [class.active]="selector === value"
                (click)="setSelected(selector)">
                <img src="/img/{{ selector }}.svg">
                <p>{{ selector }}</p>
           </div>
        </div>
    `
})
export class WorkoutTypeComponent implements ControlValueAccessor {

    selectors = ['endurance', 'strength'];
    value: string;

    private onTouch: Function;
    private onModelChange: Function;

    constructor() {}

    registerOnTouched(fn: Function) {
        this.onTouch = fn;
    }

    registerOnChange(fn: Function) {
        this.onModelChange = fn;
    }

    writeValue(value: string) {
        this.value = value;
    }

    setSelected(value: string) {
        this.value = value;
        this.onModelChange(value);
        this.onTouch();
    }
}