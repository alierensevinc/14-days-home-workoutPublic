import {TestBed} from '@angular/core/testing';

import {WorkoutTrackService} from './workout-track.service';

describe('WorkoutTrackService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: WorkoutTrackService = TestBed.get(WorkoutTrackService);
        expect(service).toBeTruthy();
    });
});
