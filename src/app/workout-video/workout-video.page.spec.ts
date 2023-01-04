import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {WorkoutVideoPage} from './workout-video.page';

describe('WorkoutVideoPage', () => {
    let component: WorkoutVideoPage;
    let fixture: ComponentFixture<WorkoutVideoPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkoutVideoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(WorkoutVideoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
