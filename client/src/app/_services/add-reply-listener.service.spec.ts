import { TestBed, inject } from '@angular/core/testing';

import { AddReplyListenerService } from './add-reply-listener.service';

describe('AddReplyListenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddReplyListenerService]
    });
  });

  it('should be created', inject([AddReplyListenerService], (service: AddReplyListenerService) => {
    expect(service).toBeTruthy();
  }));
});
