import { TestBed, inject } from '@angular/core/testing';

import { CommentSocketService } from './comment-socket.service';

describe('CommentSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentSocketService]
    });
  });

  it('should be created', inject([CommentSocketService], (service: CommentSocketService) => {
    expect(service).toBeTruthy();
  }));
});
