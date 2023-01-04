import {TestBed} from '@angular/core/testing';

import {ProgressTrackService} from './progress-track.service';

describe('ProgressTrackService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ProgressTrackService = TestBed.get(ProgressTrackService);
        expect(service).toBeTruthy();
    });
});
