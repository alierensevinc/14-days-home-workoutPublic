import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WorkoutDayPage} from './workout-day.page';

const routes: Routes = [
    {
        path: '',
        component: WorkoutDayPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WorkoutDayPageRoutingModule {
}
