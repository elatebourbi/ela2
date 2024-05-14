import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPlanningComponent } from './afficher-planning.component';

describe('AfficherPlanningComponent', () => {
  let component: AfficherPlanningComponent;
  let fixture: ComponentFixture<AfficherPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherPlanningComponent]
    });
    fixture = TestBed.createComponent(AfficherPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
