import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WorkoutDayPageRoutingModule} from './workout-day-routing.module';

import {WorkoutDayPage} from './workout-day.page';
import {WorkoutRowComponent} from '../workout-row/workout-row.component';
import {WorkoutVideoPage} from '../workout-video/workout-video.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WorkoutDayPageRoutingModule
    ],
    declarations: [WorkoutDayPage, WorkoutRowComponent, WorkoutVideoPage],
    entryComponents: [WorkoutVideoPage]
})
export class WorkoutDayPageModule {
}
