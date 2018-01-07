import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyItemComponent } from './apply-item.component';

describe('ApplyItemComponent', () => {
  let component: ApplyItemComponent;
  let fixture: ComponentFixture<ApplyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
