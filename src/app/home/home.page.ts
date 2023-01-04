import {Component} from '@angular/core';
import {Day, WorkoutTrackService} from '../workout-track.service';
import {LoadingController, NavController, Platform} from '@ionic/angular';
import {NavigationExtras} from '@angular/router';
import {ProgressDay, ProgressTrackService} from '../progress-track.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    workouts: Day[];
    progress: ProgressDay[];
    week1: ProgressDay[];
    week2: ProgressDay[];
    subscription: any;

    constructor(private workoutTrackService: WorkoutTrackService,
                private progressTrackService: ProgressTrackService,
                private navCtrl: NavController,
                private loadingController: LoadingController,
                private platform: Platform) {
    }

    ionViewWillEnter() {
        this.workouts = this.workoutTrackService.getWorkouts();
        this.progressTrackService.getProgress().then((progress: ProgressDay[]) => {
            if (!progress) {
                this.initDays();
            } else {
                this.progress = progress;
                console.log(progress.length);
                this.week1 = this.progress.slice(0, 7);
                this.week2 = this.progress.slice(7, 14);
            }
        }).catch(() => {
            this.initDays();
        });
    }

    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }

    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }

    goToWorkout(workoutId: number) {
        const workoutIdForArray = workoutId - 1;
        const workout = this.workouts[workoutIdForArray];
        const navigationExtras: NavigationExtras = {
            state: {
                workoutId,
                workout
            }
        };
        this.navCtrl.navigateForward('home/workout-day', navigationExtras).then((data: any) => {
            console.log(data);
        });
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Please wait, we are searching the ancient knowledge',
            duration: 5000,
            spinner: 'crescent'
        });
        await loading.present();
    }

    initDays() {
        this.presentLoading();
        this.progressTrackService.initDays();
        setTimeout(() => {
            this.progressTrackService.getProgress().then((progress2) => {
                this.progress = progress2;
                this.week1 = this.progress.slice(0, 7);
                this.week2 = this.progress.slice(7, 14);
            });
        }, 5000);
    }
}
