import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';

// components
import { ListItemComponent } from '../shared/components/list-item/list-item.component';

// services
import { MealsService } from './services/meals/meals.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ],
    declarations: [
        ListItemComponent
    ],
    exports: [
        ListItemComponent
    ],
    providers: []
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService
            ]
        }
    }
}