import { TestBed, inject } from '@angular/core/testing';

import { MessSocketService } from './mess-socket.service';

describe('MessSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessSocketService]
    });
  });

  it('should be created', inject([MessSocketService], (service: MessSocketService) => {
    expect(service).toBeTruthy();
  }));
});
