import { TestBed, inject } from '@angular/core/testing';

import { ClickEventService } from './click-event.service';

describe('ClickEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClickEventService]
    });
  });

  it('should be created', inject([ClickEventService], (service: ClickEventService) => {
    expect(service).toBeTruthy();
  }));
});
