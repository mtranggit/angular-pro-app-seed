import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { Store } from 'store';

@Injectable()
export class ScheduleService {

    private date$ = new BehaviorSubject(new Date());

    schedule$: Observable<any[]> = this.date$
        .do((next:any) => this.store.set('date', next));
    constructor(
        private store: Store
    ) {}
}