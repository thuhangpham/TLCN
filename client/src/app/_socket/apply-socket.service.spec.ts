import { TestBed, inject } from '@angular/core/testing';

import { ApplySocketService } from './apply-socket.service';

describe('ApplySocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplySocketService]
    });
  });

  it('should be created', inject([ApplySocketService], (service: ApplySocketService) => {
    expect(service).toBeTruthy();
  }));
});
