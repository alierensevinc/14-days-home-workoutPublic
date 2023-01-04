import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {WorkoutVideoPage} from '../workout-video/workout-video.page';

@Component({
    selector: 'app-workout-row',
    templateUrl: './workout-row.component.html',
    styleUrls: ['./workout-row.component.scss'],
})
export class WorkoutRowComponent implements OnInit {

    @Input() workoutCount: string;
    @Input() workoutName: string;
    @Input() workoutLink: string;
    @Output() allRepsDone: EventEmitter<any> = new EventEmitter<any>();

    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
    }

    async openWorkoutVideo() {
        const modal = await this.modalController.create({
            component: WorkoutVideoPage,
            componentProps: {
                workoutName: this.workoutName,
                workoutLink: this.workoutLink
            }
        });
        return await modal.present();
    }

    doneRep() {
        if (this.checkbox1 && this.checkbox2 && this.checkbox3) {
            this.allRepsDone.emit({isDone: true, workoutName: this.workoutName});
        } else {
            this.allRepsDone.emit({isDone: false, workoutName: this.workoutName});
        }
    }
}
