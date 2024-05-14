import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouter4Component } from './ajouter4.component';

describe('Ajouter4Component', () => {
  let component: Ajouter4Component;
  let fixture: ComponentFixture<Ajouter4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ajouter4Component]
    });
    fixture = TestBed.createComponent(Ajouter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
