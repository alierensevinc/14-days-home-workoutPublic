import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-workout-video',
    templateUrl: './workout-video.page.html',
    styleUrls: ['./workout-video.page.scss'],
})
export class WorkoutVideoPage implements OnInit {

    @Input() workoutName: string;
    @Input() workoutLink: SafeHtml;

    constructor(public modalCtrl: ModalController,
                public sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.workoutLink = this.sanitizer.bypassSecurityTrustHtml(String(this.workoutLink));
    }

    dismiss() {
        this.modalCtrl.dismiss();
    }

    toDarebee() {
        window.open('https://darebee.com/', '_system');
    }

}
