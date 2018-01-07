import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCenterComponent } from './home-center.component';

describe('HomeCenterComponent', () => {
  let component: HomeCenterComponent;
  let fixture: ComponentFixture<HomeCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
