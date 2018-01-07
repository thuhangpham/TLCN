import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessItemComponent } from './mess-item.component';

describe('MessItemComponent', () => {
  let component: MessItemComponent;
  let fixture: ComponentFixture<MessItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
