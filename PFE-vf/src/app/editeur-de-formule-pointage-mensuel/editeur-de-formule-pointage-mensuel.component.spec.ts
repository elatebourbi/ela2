import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeurDeFormulePointageMensuelComponent } from './editeur-de-formule-pointage-mensuel.component';

describe('EditeurDeFormulePointageMensuelComponent', () => {
  let component: EditeurDeFormulePointageMensuelComponent;
  let fixture: ComponentFixture<EditeurDeFormulePointageMensuelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeurDeFormulePointageMensuelComponent]
    });
    fixture = TestBed.createComponent(EditeurDeFormulePointageMensuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
