import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouter1Component } from './ajouter1.component';

describe('Ajouter1Component', () => {
  let component: Ajouter1Component;
  let fixture: ComponentFixture<Ajouter1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ajouter1Component]
    });
    fixture = TestBed.createComponent(Ajouter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
