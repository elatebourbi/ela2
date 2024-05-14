import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeurDeFormulePointageJournalierComponent } from './editeur-de-formule-pointage-journalier.component';

describe('EditeurDeFormulePointageJournalierComponent', () => {
  let component: EditeurDeFormulePointageJournalierComponent;
  let fixture: ComponentFixture<EditeurDeFormulePointageJournalierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeurDeFormulePointageJournalierComponent]
    });
    fixture = TestBed.createComponent(EditeurDeFormulePointageJournalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
