import {Injectable} from '@angular/core';

export interface Workout {
    name: string;
    link: string;
}

export interface WorkoutAndCount {
    workout: Workout;
    count: string;
    done: boolean;
}

export interface Day {
    workoutAndCount: WorkoutAndCount[];
}

@Injectable({
    providedIn: 'root'
})
export class WorkoutTrackService {

    public workouts: Workout[] = [
        {// 0
            name: 'Push Ups',
            // tslint:disable-next-line:max-line-length
            link: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/v9LABVJzv8A?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {// 1
            name: 'Close Push Ups',
            // tslint:disable-next-line:max-line-length
            link: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/SwoNNo4W1OU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {// 2
            name: 'Wide Push Ups',
            // tslint:disable-next-line:max-line-length
            link: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/1Y8pTxdwf3M?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {// 3
            name: 'Climbers',
            // tslint:disable-next-line:max-line-length
            link: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/w2iTOneGPdU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {// 4
            name: 'Flutter Kicks',
            // tslint:disable-next-line:max-line-length
            link: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/WRnq49TAv-w?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {// 5
            name: 'Sit Ups',
            // tslint:disable-next-line:max-line-length
            link: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/5bOjqyL0PGE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {// 6
            name: 'Lunges',
            // tslint:disable-next-line:max-line-length
            link: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/UpyDdQjBTa0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {// 7
            name: 'Squats',
            // tslint:disable-next-line:max-line-length
            link: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/Zqc_lc93hak?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
    ];
    public workoutsAndCountsForDay1: WorkoutAndCount[] = [
        {
            workout: this.workouts[0],
            count: '8', done: false
        },
        {
            workout: this.workouts[7],
            count: '8', done: false
        },
        {
            workout: this.workouts[6],
            count: '8', done: false
        },
    ];
    public workoutsAndCountsForDay2: WorkoutAndCount[] = [
        {
            workout: this.workouts[3],
            count: '8', done: false
        },
        {
            workout: this.workouts[4],
            count: '8', done: false
        },
        {
            workout: this.workouts[5],
            count: '8', done: false
        },
    ];
    public workoutsAndCountsForDay3: WorkoutAndCount[] = [
        {
            workout: this.workouts[0],
            count: '10', done: false
        },
        {
            workout: this.workouts[7],
            count: '10', done: false
        },
        {
            workout: this.workouts[6],
            count: '10', done: false
        },
    ];
    public workoutsAndCountsForDay4: WorkoutAndCount[] = [
        {
            workout: this.workouts[3],
            count: '10', done: false
        },
        {
            workout: this.workouts[4],
            count: '10', done: false
        },
        {
            workout: this.workouts[5],
            count: '10', done: false
        },
    ];
    public workoutsAndCountsForDay5: WorkoutAndCount[] = [
        {
            workout: this.workouts[0],
            count: '12', done: false
        },
        {
            workout: this.workouts[7],
            count: '12', done: false
        },
        {
            workout: this.workouts[6],
            count: '12', done: false
        },
    ];
    public workoutsAndCountsForDay6: WorkoutAndCount[] = [
        {
            workout: this.workouts[3],
            count: '12', done: false
        },
        {
            workout: this.workouts[4],
            count: '12', done: false
        },
        {
            workout: this.workouts[5],
            count: '12', done: false
        },
    ];
    public workoutsAndCountsForDay7: WorkoutAndCount[] = [
        {
            workout: this.workouts[0],
            count: '12', done: false
        },
        {
            workout: this.workouts[7],
            count: '12', done: false
        },
        {
            workout: this.workouts[6],
            count: '12', done: false
        },
        {
            workout: this.workouts[3],
            count: '12', done: false
        },
        {
            workout: this.workouts[4],
            count: '12', done: false
        },
        {
            workout: this.workouts[5],
            count: '12', done: false
        },
    ];
    public workoutsAndCountsForDay8: WorkoutAndCount[] = [
        {
            workout: this.workouts[0],
            count: '12', done: false
        },
        {
            workout: this.workouts[1],
            count: '8', done: false
        },
        {
            workout: this.workouts[2],
            count: '8', done: false
        },
        {
            workout: this.workouts[3],
            count: '12', done: false
        },
    ];
    public workoutsAndCountsForDay9: WorkoutAndCount[] = [
        {
            workout: this.workouts[6],
            count: '12', done: false
        },
        {
            workout: this.workouts[7],
            count: '12', done: false
        },
        {
            workout: this.workouts[4],
            count: '12', done: false
        },
        {
            workout: this.workouts[5],
            count: '12', done: false
        },
    ];
    public workoutsAndCountsForDay10: WorkoutAndCount[] = [
        {
            workout: this.workouts[0],
            count: '12', done: false
        },
        {
            workout: this.workouts[1],
            count: '10', done: false
        },
        {
            workout: this.workouts[2],
            count: '10', done: false
        },
        {
            workout: this.workouts[3],
            count: '12', done: false
        },
    ];
    public workoutsAndCountsForDay11: WorkoutAndCount[] = [
        {
            workout: this.workouts[6],
            count: '12', done: false
        },
        {
            workout: this.workouts[7],
            count: '12', done: false
        },
        {
            workout: this.workouts[4],
            count: '14', done: false
        },
        {
            workout: this.workouts[5],
            count: '14', done: false
        },
    ];
    public workoutsAndCountsForDay12: WorkoutAndCount[] = [
        {
            workout: this.workouts[0],
            count: '12', done: false
        },
        {
            workout: this.workouts[1],
            count: '12', done: false
        },
        {
            workout: this.workouts[2],
            count: '12', done: false
        },
        {
            workout: this.workouts[3],
            count: '12', done: false
        },
    ];
    public workoutsAndCountsForDay13: WorkoutAndCount[] = [
        {
            workout: this.workouts[6],
            count: '12', done: false
        },
        {
            workout: this.workouts[7],
            count: '12', done: false
        },
        {
            workout: this.workouts[4],
            count: '16', done: false
        },
        {
            workout: this.workouts[5],
            count: '16', done: false
        },
    ];
    public workoutsAndCountsForDay14: WorkoutAndCount[] = [
        {
            workout: this.workouts[0],
            count: '12', done: false
        },
        {
            workout: this.workouts[1],
            count: '12', done: false
        },
        {
            workout: this.workouts[2],
            count: '12', done: false
        },
        {
            workout: this.workouts[6],
            count: '12', done: false
        },
        {
            workout: this.workouts[7],
            count: '12', done: false
        },
        {
            workout: this.workouts[3],
            count: '12', done: false
        },
        {
            workout: this.workouts[4],
            count: '12', done: false
        },
        {
            workout: this.workouts[5],
            count: '12', done: false
        },
    ];

    public workoutsAndDays: Day[] = [
        {
            workoutAndCount: this.workoutsAndCountsForDay1,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay2,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay3,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay4,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay5,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay6,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay7,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay8,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay9,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay10,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay11,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay12,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay13,
        },
        {
            workoutAndCount: this.workoutsAndCountsForDay14,
        },
    ];

    constructor() {
    }

    public getWorkouts() {
        return this.workoutsAndDays;
    }
}

