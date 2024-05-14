import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesAbsencesComponent } from './liste-des-absences.component';

describe('ListeDesAbsencesComponent', () => {
  let component: ListeDesAbsencesComponent;
  let fixture: ComponentFixture<ListeDesAbsencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesAbsencesComponent]
    });
    fixture = TestBed.createComponent(ListeDesAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
