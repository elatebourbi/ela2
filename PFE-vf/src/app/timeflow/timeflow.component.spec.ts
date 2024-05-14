import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeflowComponent } from './timeflow.component';

describe('TimeflowComponent', () => {
  let component: TimeflowComponent;
  let fixture: ComponentFixture<TimeflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeflowComponent]
    });
    fixture = TestBed.createComponent(TimeflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
