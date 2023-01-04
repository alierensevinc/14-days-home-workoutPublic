import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {WorkoutRowComponent} from './workout-row.component';

describe('WorkoutRowComponent', () => {
    let component: WorkoutRowComponent;
    let fixture: ComponentFixture<WorkoutRowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkoutRowComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(WorkoutRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
