import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WorkoutAndCount} from '../workout-track.service';
import {ProgressTrackService} from '../progress-track.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-workout-day',
    templateUrl: './workout-day.page.html',
    styleUrls: ['./workout-day.page.scss'],
})
export class WorkoutDayPage implements OnInit {

    workoutDay: number;
    workouts: WorkoutAndCount[];
    requiredReps: number;
    // tslint:disable-next-line:no-inferrable-types
    allRepsDone: boolean = false;

    constructor(private router: Router,
                private progressTrackService: ProgressTrackService,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        const params = this.router.getCurrentNavigation().extras.state;
        this.workoutDay = params.workoutId;
        this.workouts = params.workout.workoutAndCount;
        this.requiredReps = this.workouts.length;
    }

    finishWorkout() {
        if (this.allRepsDone) {
            this.progressTrackService.setProgress(this.workoutDay).then((data: any) => {
                this.navCtrl.navigateRoot('/home');
            });
        }
    }

    onRepsDone(result: any) {
        let counter = 0;
        // tslint:disable-next-line:prefer-const
        for (let workout of this.workouts) {
            if (workout.workout.name === result.workoutName) {
                workout.done = result.isDone;
            }
            if (workout.done) {
                counter++;
            }
            this.allRepsDone = counter === this.requiredReps;
        }
    }
}
