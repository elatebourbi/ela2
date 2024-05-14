import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPlanningComponent } from './creation-planning.component';

describe('CreationPlanningComponent', () => {
  let component: CreationPlanningComponent;
  let fixture: ComponentFixture<CreationPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationPlanningComponent]
    });
    fixture = TestBed.createComponent(CreationPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
