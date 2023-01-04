import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
    {
        path: 'home/workout-day',
        loadChildren: () => import('./workout-day/workout-day.module').then(m => m.WorkoutDayPageModule)
    },
    {
        path: 'workout-video',
        loadChildren: () => import('./workout-video/workout-video.module').then(m => m.WorkoutVideoPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
