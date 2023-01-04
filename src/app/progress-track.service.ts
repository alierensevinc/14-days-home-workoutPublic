import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

export interface ProgressDay {
    day: number;
    isDone: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ProgressTrackService {

    days: ProgressDay[] = [
        {
            day: 1,
            isDone: false
        },
        {
            day: 2,
            isDone: false
        },
        {
            day: 3,
            isDone: false
        },
        {
            day: 4,
            isDone: false
        },
        {
            day: 5,
            isDone: false
        },
        {
            day: 6,
            isDone: false
        },
        {
            day: 7,
            isDone: false
        },
        {
            day: 8,
            isDone: false
        },
        {
            day: 9,
            isDone: false
        },
        {
            day: 10,
            isDone: false
        },
        {
            day: 11,
            isDone: false
        },
        {
            day: 12,
            isDone: false
        },
        {
            day: 13,
            isDone: false
        },
        {
            day: 14,
            isDone: false
        },
    ];

    constructor(private storage: Storage) {

    }

    initDays() {
        this.storage.set('days', this.days);
    }

    getProgress() {
        return this.storage.get('days');
    }

    setProgress(index) {
        return this.getProgress().then((progress: ProgressDay[]) => {
            const days = progress;
            // tslint:disable-next-line
            for (let progress of days) {
                if (index === progress.day) {
                    progress.isDone = true;
                }
            }
            return this.storage.set('days', days);
        });
    }

}
