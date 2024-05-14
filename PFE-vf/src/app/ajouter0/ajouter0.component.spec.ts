import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouter0Component } from './ajouter0.component';

describe('Ajouter0Component', () => {
  let component: Ajouter0Component;
  let fixture: ComponentFixture<Ajouter0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ajouter0Component]
    });
    fixture = TestBed.createComponent(Ajouter0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
