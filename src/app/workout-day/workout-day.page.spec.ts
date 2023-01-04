import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {WorkoutDayPage} from './workout-day.page';

describe('WorkoutDayPage', () => {
    let component: WorkoutDayPage;
    let fixture: ComponentFixture<WorkoutDayPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkoutDayPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(WorkoutDayPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
