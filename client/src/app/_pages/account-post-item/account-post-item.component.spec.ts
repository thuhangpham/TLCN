import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPostItemComponent } from './account-post-item.component';

describe('AccountPostItemComponent', () => {
  let component: AccountPostItemComponent;
  let fixture: ComponentFixture<AccountPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
